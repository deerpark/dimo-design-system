import type { PropsWithChildren, Ref } from 'react'
import * as React from 'react'
import { cx } from '../../lib/utils'
import { StyleOptionProps } from '../../interfaces'
import { Button } from '@headlessui/react'

type ButtonComponentStyleProps = Pick<Required<StyleOptionProps<{}>>, 'size' | 'variant' | 'primary'>
type ButtonComponentProps = PropsWithChildren<StyleOptionProps<{}>> & { badge?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

/* Buttton props에 따른 클래스 객체 리턴 */
const getClasses = ({ size, variant, primary }: ButtonComponentStyleProps) => {
  /* const isSolid = variant === 'solid' */
  const isOutline = variant === 'outline'
  /* const isGhost = variant === 'ghost' */
  const classesBySize = {
    mini: {
      'px-1.5 py-0.5 text-xs rounded-md font-semibold': true,
    },
    small: {
      'px-2 py-1 text-sm rounded-md font-semibold': true,
      'shadow-xs': isOutline,
    },
    medium: {
      'px-4 py-1.5 text-base rounded-md font-semibold': true,
      'shadow-sm': isOutline,
    },
    default: {
      'px-5 py-2 text-base rounded-md font-bold': true,
      'shadow-sm': isOutline,
    },
    large: {
      'px-6 py-3 text-lg rounded-md font-bold': true,
      'shadow-sm': isOutline,
    },
  }
  // 'bg-brand-primary dark:bg-inverse-brand-primary text-content-basic': primary,
  const classesByVariant = {
    solid: primary ? {
      'text-content-basic': true,
      'bg-brand-primary': true,
    } : {
      'text-content-secondary': true,
      'bg-background-secondary': true,
    },
    outline: primary ? {
      'text-brand-primary': true,
      'border border-brand-primary': true,
    } : {
      'text-content-secondary': true,
      'border border-border-secondary': true,
    },
    ghost: primary ? {
      'text-brand-primary': true,
    } : {
      'text-content-secondary': true,},
  }
  return { ...classesBySize[size], ...classesByVariant[variant] }
}

function ButtonComponent({
  children,
  className,
  badge,
  primary = false,
  size = 'medium',
  variant = 'solid',
  type = 'button',
  ...props
}: ButtonComponentProps, ref: Ref<HTMLButtonElement>) {
  const classnames = cx(
    {
      'relative inline-flex items-center justify-center outline-none transition-all whitespace-nowrap shrink-0': true,
      'hover:opacity-70': true,
      'focus:ring-2 focus:ring-brand-primary focus:z-20': true,
      'disabled:text-content-disabled disabled:opacity-50 disabled:cursor-not-allowed': true,
    },
    getClasses({ size, variant, primary }),
    {'text-brand-sunsetPink': badge},
    className,
  )
  const restProps = {...props} as Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>
  return (
    <Button ref={ref} className={classnames} type={type} {...restProps}>
      {children}
      {badge && <span className="bg-brand-sunsetPink w-1 h-1 absolute top-0.5 right-0.5 rounded-full" />}
    </Button>
  )
}


export default React.forwardRef<HTMLButtonElement, ButtonComponentProps>(ButtonComponent)
