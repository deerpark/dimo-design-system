import * as React from 'react'
import { cx } from '../../lib/utils'
import { StyleOptionProps } from '../../interfaces'
import { Button as HeadlessButton } from '@headlessui/react'

type ButtonComponentStyleProps = Pick<
  Required<StyleOptionProps<{}>>,
  'size' | 'variant' | 'primary' | 'icon' | 'circle' | 'link'
>

type ButtonComponentProps = React.PropsWithChildren<StyleOptionProps<{}>> &
  (
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | React.ComponentPropsWithoutRef<typeof HeadlessButton>
  ) & {
    anchor?: boolean
    type?: 'button' | 'submit' | 'reset'
  }

const SIZE_CLASSES = {
  mini: 'text-label4 min-h-[18px] leading-5',
  small: 'text-label3',
  medium: 'text-label2',
  default: 'text-label2',
  large: 'text-label1',
}

const getClasses = ({
  size,
  variant,
  primary,
  icon,
  circle,
  link,
}: ButtonComponentStyleProps) => {
  const sizeClass = SIZE_CLASSES[size]
  const paddingClass = icon
    ? `p-${size === 'mini' ? 1 : size === 'small' ? 1.5 : size === 'medium' ? 2 : size === 'large' ? 3 : 2.5}`
    : `px-${size === 'mini' ? 2 : size === 'small' ? 3 : size === 'medium' ? '[14px]' : 4} py-${size === 'mini' ? 0.5 : size === 'small' ? 1.5 : size === 'medium' ? 2 : 2.5}`
  const roundedClass = circle ? 'rounded-full' : 'rounded-md'
  const underlineClass = link ? 'underline underline-offset-2' : ''

  const variantClass = {
    solid: primary
      ? 'text-content-basic bg-brand-primary'
      : 'text-content-secondary bg-background-secondary',
    outline: primary
      ? 'text-brand-primary border focus:border-transparent active:border-transparent border-brand-primary'
      : 'text-content-secondary border focus:border-transparent active:border-transparent border-border-secondary',
    ghost: primary ? 'text-brand-primary' : 'text-content-secondary',
  }[variant]

  return `${paddingClass} ${roundedClass} ${sizeClass} ${variantClass} ${underlineClass}`
}

const ButtonComponent = React.forwardRef<HTMLElement, ButtonComponentProps>(
  (
    {
      anchor = false,
      children,
      className,
      badge = false,
      icon = false,
      circle = false,
      primary = false,
      link = false,
      size = 'medium',
      variant = 'solid',
      type,
      ...props
    },
    ref
  ) => {
    const classnames = cx(
      'inline-flex items-center justify-center space-x-1 outline-none transition-all whitespace-nowrap shrink-0',
      'hover:opacity-70',
      'focus:ring-2 focus:ring-brand-primary focus:z-20',
      'disabled:text-content-disabled disabled:opacity-50 disabled:cursor-not-allowed',
      badge && 'text-brand-sunsetPink',
      getClasses({ size, variant, primary, icon, circle, link }),
      className
    )

    const restProps = !anchor
      ? ({ ...props } as Omit<
          React.ComponentPropsWithoutRef<typeof HeadlessButton>,
          'ref'
        >)
      : props

    if (!anchor) {
      return (
        <HeadlessButton
          ref={ref as React.Ref<HTMLButtonElement>}
          className={classnames}
          type={type || 'button'}
          {...restProps}
        >
          {children}
          {badge && (
            <span className='bg-brand-sunsetPink absolute right-0.5 top-0.5 h-1 w-1 rounded-full' />
          )}
        </HeadlessButton>
      )
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classnames}
        {...restProps}
      >
        {children}
        {badge && (
          <span className='bg-brand-sunsetPink absolute right-0.5 top-0.5 h-1 w-1 rounded-full' />
        )}
      </a>
    )
  }
)

export default React.memo(ButtonComponent)
