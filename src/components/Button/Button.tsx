import type { PropsWithChildren, Ref } from 'react'
import * as React from 'react'
import { cx } from '../../lib/utils'
import { StyleOptionProps } from '../../interfaces'
import { Button } from '@headlessui/react'

type ButtonComponentStyleProps = Pick<
  Required<StyleOptionProps<{}>>,
  'size' | 'variant' | 'primary'
>
type ButtonComponentProps = PropsWithChildren<StyleOptionProps<{}>> & {
  badge?: boolean
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

/* Buttton props에 따른 클래스 객체 리턴 */
const getClasses = ({ size, variant, primary }: ButtonComponentStyleProps) => {
  /* const isSolid = variant === 'solid' */
  const isOutline = variant === 'outline'
  /* const isGhost = variant === 'ghost' */
  const classesBySize = {
    mini: 'px-2 py-0.5 text-label4 rounded-md',
    small: 'px-3 py-1.5 text-label3 rounded-md',
    medium: 'px-[14px] py-2 text-label2 rounded-md',
    default: 'px-4 py-2.5 text-label2 rounded-md',
    large: 'px-4 py-3 text-label1 rounded-md',
  }
  // 'bg-brand-primary dark:bg-inverse-brand-primary text-content-basic': primary,
  const classesByVariant = {
    solid: primary
      ? 'text-content-basic bg-brand-primary'
      : 'text-content-secondary bg-background-secondary',
    outline: primary
      ? 'text-brand-primary border border-brand-primary'
      : 'text-content-secondary border border-border-secondary',
    ghost: primary ? 'text-brand-primary' : 'text-content-secondary',
  }
  return `${classesBySize[size]} ${classesByVariant[variant]}`
}

function ButtonComponent(
  {
    children,
    className,
    badge,
    primary = false,
    size = 'medium',
    variant = 'solid',
    type = 'button',
    ...props
  }: ButtonComponentProps,
  ref: Ref<HTMLButtonElement>
) {
  const classnames = cx(
    'inline-flex items-center justify-center outline-none transition-all whitespace-nowrap shrink-0',
    'hover:opacity-70',
    'focus:ring-2 focus:ring-brand-primary focus:z-20',
    'disabled:text-content-disabled disabled:opacity-50 disabled:cursor-not-allowed',
    badge ? 'text-brand-sunsetPink' : '',
    getClasses({ size, variant, primary }),
    className
  )
  const restProps = { ...props } as Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  >
  return (
    <Button ref={ref} className={classnames} type={type} {...restProps}>
      {children}
      {badge && (
        <span className='bg-brand-sunsetPink absolute right-0.5 top-0.5 h-1 w-1 rounded-full' />
      )}
    </Button>
  )
}

export default React.forwardRef<HTMLButtonElement, ButtonComponentProps>(
  ButtonComponent
)
