import { Button as HeadlessButton } from '@headlessui/react'
import * as React from 'react'
import { CommonProps, StyleOptionProps } from '../../interfaces'
import { cx } from '../../lib/utils'

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

const PADDING_CLASSES = {
  mini: {
    icon: 'p-1',
    default: 'px-2 py-0.5',
  },
  small: {
    icon: 'p-1.5',
    default: 'px-3 py-1.5',
  },
  medium: {
    icon: 'p-2',
    default: 'px-[14px] py-2',
  },
  default: {
    icon: 'p-2.5',
    default: 'px-4 py-2.5',
  },
  large: {
    icon: 'p-3',
    default: 'px-4 py-3',
  },
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
    ? PADDING_CLASSES[size].icon
    : PADDING_CLASSES[size].default
  const roundedClass = circle
    ? 'rounded-full'
    : 'rounded-md group-has-[.button]/button:rounded-none group-has-[.button]/button:first-of-type:rounded-l-md group-has-[.button]/button:last-of-type:rounded-r-md focus:!rounded-md active:!rounded-md'
  const underlineClass = link ? 'underline underline-offset-2' : ''

  const variantClass = {
    solid: primary
      ? 'text-content-basic bg-brand-primary'
      : 'text-content-secondary bg-background-secondary',
    outline: primary
      ? 'text-brand-primary border border-brand-primary focus:border-transparent active:border-transparent'
      : 'text-content-secondary border border-border-secondary focus:border-transparent active:border-transparent',
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
      'button inline-flex items-center justify-center space-x-1 outline-none transition-all whitespace-nowrap shrink-0',
      'hover:opacity-70',
      'focus:ring-2 focus:ring-brand-primary focus:ring-offset-1 group-has-[.button]/button:ring-offset-0 focus:z-20',
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

export const Group = ({
  children,
  className,
}: React.PropsWithChildren<StyleOptionProps<CommonProps>>) => {
  const classnames = cx(
    'inline-flex items-stretch -space-x-px group/button px-px',
    className
  )
  return <div className={classnames}>{children}</div>
}

export default React.memo(ButtonComponent)
