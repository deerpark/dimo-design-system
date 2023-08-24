import type { PropsWithChildren, Ref } from 'react'
import { forwardRef } from 'react'
import cx from 'classnames'
import { CommonProps, StyleOptionProps } from '../../interfaces'

type ButtonStyleProps = Pick<Required<StyleOptionProps<{}>>, 'size' | 'variant' | 'primary'>
type ButtonProps = PropsWithChildren<StyleOptionProps<CommonProps>> & { badge?: boolean } & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

/* Buttton props에 따른 클래스 객체 리턴 */
const getClasses = ({ size, variant, primary }: ButtonStyleProps) => {
  /* const isSolid = variant === 'solid' */
  const isOutline = variant === 'outline'
  /* const isGhost = variant === 'ghost' */
  const classesBySize = {
    xs: {
      'px-1.5 py-0.5 text-xs rounded-xs font-semibold': true,
      'group-[.button-group]/button:first-of-type:rounded-l-xs': true,
      'group-[.button-group]/button:last-of-type:rounded-r-xs': true,
      'focus:group-[.button-group]/button:!rounded-xs': true,
    },
    sm: {
      'px-2 py-1 text-sm rounded-sm font-semibold': true,
      'group-[.button-group]/button:first-of-type:rounded-l-sm': true,
      'group-[.button-group]/button:last-of-type:rounded-r-sm': true,
      'focus:group-[.button-group]/button:!rounded-sm': true,
      'shadow-xs dark:shadow-dkxs': isOutline,
    },
    base: {
      'px-4 py-1.5 text-base rounded-md font-semibold': true,
      'group-[.button-group]/button:first-of-type:rounded-l-md': true,
      'group-[.button-group]/button:last-of-type:rounded-r-md': true,
      'focus:group-[.button-group]/button:!rounded-md': true,
      'shadow-sm dark:shadow-dksm': isOutline,
    },
    lg: {
      'px-5 py-2 text-base rounded-md font-bold': true,
      'group-[.button-group]/button:first-of-type:rounded-l': true,
      'group-[.button-group]/button:last-of-type:rounded-r': true,
      'focus:group-[.button-group]/button:!rounded': true,
      'shadow-sm dark:shadow-dksm': isOutline,
    },
    xl: {
      'px-6 py-3 text-lg rounded-lg font-bold': true,
      'group-[.button-group]/button:first-of-type:rounded-l-lg': true,
      'group-[.button-group]/button:last-of-type:rounded-r-lg': true,
      'focus:group-[.button-group]/button:!rounded-lg': true,
      'shadow-sm dark:shadow-dksm': isOutline,
    },
  }
  // 'bg-brand-primary dark:bg-inverse-brand-primary text-content-basic': primary,
  const classesByVariant = {
    solid: primary ? {
      'group-[.button-group]/button:ml-px group-[.button-group]/button:first-of-type:ml-0': true,
      'text-content-basic': true,
      'bg-brand-primary dark:bg-inverse-brand-primary': true,
      'focus:bg-brand-primary dark:focus:bg-inverse-brand-primary': true,
      'active:bg-brand-primary dark:active:bg-inverse-brand-primary': true,
    } : {
      'text-content-primary dark:text-inverse-content-primary': true,
      'group-[.button-group]/button:ml-px group-[.button-group]/button:first-of-type:ml-0': true,
      'bg-background-tertiary dark:bg-inverse-background-tertiary': true,
      'focus:bg-background-primary dark:focus:bg-inverse-background-primary': true,
      'active:bg-background-primary dark:active:bg-inverse-background-primary': true,
    },
    outline: primary ? {
      'group-[.button-group]/button:-ml-px group-[.button-group]/button:first-of-type:ml-0': true,
      'text-brand-primary text-inverse-brand-primary': true,
      'border border-brand-primary dark:border-inverse-brand-primary': true,
      'focus:border-transparent dark:focus:border-transparent': true,
      'active:border-transparent dark:active:border-transparent': true,
    } : {
      'text-content-primary dark:text-inverse-content-primary': true,
      'group-[.button-group]/button:-ml-px group-[.button-group]/button:first-of-type:ml-0': true,
      'border border-border-secondary dark:border-inverse-border-primary': true,
      'focus:border-transparent dark:focus:border-transparent': true,
      'active:border-transparent dark:active:border-transparent': true,
    },
    ghost: primary ? {
      'text-brand-primary text-inverse-brand-primary': true,
    } : {
      'text-content-primary dark:text-inverse-content-primary': true,},
  }
  return { ...classesBySize[size], ...classesByVariant[variant] }
}

function Button({
  children,
  className,
  badge,
  primary = false,
  size = 'base',
  variant = 'solid',
  ...props
}: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const classnames = cx(
    {
      'relative inline-flex items-center justify-center outline-none transition-all whitespace-nowrap shrink-0': true,
      'group-[.button-group]/button:rounded-none': true,
      'hover:opacity-70 dark:hover:opacity-70 hover:z-10': true,
      'active:scale-95 active:z-20': true,
      'focus:ring-2 dark:focus:ring-2 focus:ring-brand-primary dark:focus:ring-inverse-brand-primary focus:z-20': true,
      'disabled:text-content-disabled dark:disabled:text-inverse-content-disabled disabled:opacity-50 disabled:cursor-not-allowed': true,
    },
    getClasses({ size, variant, primary }),
    {'!text-brand-sunsetPink dark:!text-inverse-brand-sunsetPink': badge},
    className
  )
  return (
    <button ref={ref} className={classnames} {...props}>
      {children}
      {badge && <span className="bg-brand-sunsetPink dark:bg-inverse-brand-sunsetPink w-1 h-1 absolute top-0.5 right-0.5 rounded-full" />}
    </button>
  )
}

export const Group = ({ children, className }: PropsWithChildren<StyleOptionProps<CommonProps>>) => {
  const classnames = cx({
    'inline-flex items-stretch gap-0 button-group group/button': true,
  }, className,)
  return <div className={classnames}>{children}</div>
}


export default forwardRef<HTMLButtonElement, ButtonProps>(Button)
