import { PropsWithChildren } from 'react'
import cx from 'classnames'
import { CommonProps, StyleOptionProps } from '../../interfaces'

type ButtonStyleProps = Pick<Required<StyleOptionProps<{}>>, 'size' | 'variant'>

/* Buttton props에 따른 클래스 객체 리턴 */
const getClasses = ({ size, variant }: ButtonStyleProps) => {
  const isSolid = variant === 'solid'
  /* const isOutline = variant === 'outline' */
  /* const isGhost = variant === 'ghost' */
  const classesBySize = {
    xs: {
      'px-1.5 py-1 text-2xs rounded-xs': true,
      'group-[.button-group]/button:first-of-type:rounded-l-xs': true,
      'group-[.button-group]/button:last-of-type:rounded-r-xs': true,
    },
    sm: {
      'px-2 py-1.5 text-xs rounded-sm': true,
      'group-[.button-group]/button:first-of-type:rounded-l-sm': true,
      'group-[.button-group]/button:last-of-type:rounded-r-sm': true,
      'shadow dark:shadow-dk': isSolid,
    },
    base: {
      'px-4 py-2 text-sm rounded-md': true,
      'group-[.button-group]/button:first-of-type:rounded-l-md': true,
      'group-[.button-group]/button:last-of-type:rounded-r-md': true,
      'shadow dark:shadow-dk': isSolid,
    },
    lg: {
      'px-5 py-3 text-base rounded-md': true,
      'group-[.button-group]/button:first-of-type:rounded-l': true,
      'group-[.button-group]/button:last-of-type:rounded-r': true,
      'shadow dark:shadow-dk': isSolid,
    },
    xl: {
      'px-6 py-4 text-md rounded-lg': true,
      'group-[.button-group]/button:first-of-type:rounded-l-lg': true,
      'group-[.button-group]/button:last-of-type:rounded-r-lg': true,
      'shadow-lg dark:shadow-dklg': isSolid,
    },
  }
  const classesByVariant = {
    solid: {
      'bg-background-tertiary dark:bg-inverse-background-tertiary': true,
    },
    outline: {
      'border border-border-primary dark:border-inverse-background-primary': true,
      'focus:border-transparent dark:focus:border-transparent ': true,
    },
    ghost: {},
  }
  return { ...classesBySize[size], ...classesByVariant[variant] }
}

export default function Button({
  children,
  className,
  size = 'base',
  variant = 'solid',
  ...props
}: PropsWithChildren<StyleOptionProps<CommonProps>>) {
  const classnames = cx(
    {
      'relative inline-flex items-center justify-center outline-none transition-all font-semibold whitespace-nowrap shrink-0': true,
      'group-[.button-group]/button:rounded-none': true,
      'm-l-px first-of-type:m-l-auto': true,
      'text-content-primary dark:text-inverse-content-primary': true,
      'hover:opacity-70 dark:hover:opacity-70 hover:z-10': true,
      'active:scale-95 active:z-20': true,
      'focus:ring-2 dark:focus:ring-0 focus:ring-brand-primary dark:focus:ring-inverse-brand-primary focus:z-20': true,
      'disabled:text-content-disabled dark:disabled:text-inverse-content-disabled disabled:opacity-50 disabled:cursor-not-allowed': true,
    },
    getClasses({ size, variant }),
    className
  )
  return (
    <button type='button' className={classnames} {...props}>
      {children}
    </button>
  )
}

Button.Group = ({ children }: PropsWithChildren<StyleOptionProps<CommonProps>>) => {
  const classnames = cx({
    'inline-flex items-stretch gap-0 button-group group/button': true,
  })
  if (Array.isArray(children)) console.dir(children.length)
  return <div className={classnames}>{children}</div>
}
