import { PropsWithChildren } from 'react'
import cx from 'classnames'
import { CommonProps, StyleOptionProps } from '~/interfaces'

type ButtonStyleProps = Pick<Required<StyleOptionProps<{}>>, 'size' | 'variant'>

/* Buttton props에 따른 클래스 객체 리턴 */
const getClasses = ({ size, variant }: ButtonStyleProps) => {
  const isSolid = variant === 'solid'
  /* const isOutline = variant === 'outline' */
  /* const isGhost = variant === 'ghost' */
  const classesBySize = {
    xs: {
      'm-0': true,
      'px-2': true,
      'py-0': true,
      'min-w-[20px]': true,
      'min-h-[20px]': true,
      'm-l-px': true,
      'first-of-type:m-l-auto': true,
      border: true,
      'rounded-sm': true,
      'group-[.button-group]/button:rounded-none': true,
      'group-[.button-group]/button:first-of-type:rounded-l-sm': true,
      'group-[.button-group]/button:last-of-type:rounded-r-sm': true,
      'font-medium	': true,
      'text-2xs': true,
      'shadow-sm': isSolid,
      'focus:shadow-xs': isSolid,
      'active:shadow-xs': isSolid,
      'focus:outline-2': true,
      'active:outline-2': true,
    },
    sm: {
      'm-0': true,
      'px-2': true,
      'py-0': true,
      'min-w-[24px]': true,
      'min-h-[24px]': true,
      'm-l-px': true,
      'first-of-type:m-l-auto': true,
      border: true,
      'rounded-sm': true,
      'group-[.button-group]/button:rounded-none': true,
      'group-[.button-group]/button:first-of-type:rounded-l-sm': true,
      'group-[.button-group]/button:last-of-type:rounded-r-sm': true,
      'font-medium	': true,
      'text-xs': true,
      'shadow-sm': isSolid,
      'focus:shadow-xs': isSolid,
      'active:shadow-xs': isSolid,
      'focus:outline-2': true,
      'active:outline-2': true,
    },
    base: {
      'm-0': true,
      'px-3': true,
      'py-0': true,
      'min-w-[32px]': true,
      'min-h-[32px]': true,
      'm-l-px': true,
      'first-of-type:m-l-auto': true,
      border: true,
      rounded: true,
      'group-[.button-group]/button:rounded-none': true,
      'group-[.button-group]/button:first-of-type:rounded-l': true,
      'group-[.button-group]/button:last-of-type:rounded-r': true,
      'font-bold	': true,
      'text-sm': true,
      shadow: isSolid,
      'focus:shadow-sm': isSolid,
      'active:shadow-sm': isSolid,
      'focus:outline-2': true,
      'active:outline-2': true,
    },
    lg: {
      'm-0': true,
      'px-4': true,
      'py-0': true,
      'min-w-[40px]': true,
      'min-h-[40px]': true,
      'm-l-px': true,
      'first-of-type:m-l-auto': true,
      border: true,
      rounded: true,
      'group-[.button-group]/button:rounded-none': true,
      'group-[.button-group]/button:first-of-type:rounded-l': true,
      'group-[.button-group]/button:last-of-type:rounded-r': true,
      'font-extrabold	': true,
      'text-md': true,
      shadow: isSolid,
      'focus:shadow-sm': isSolid,
      'active:shadow-sm': isSolid,
      'focus:outline-2': true,
      'active:outline-2': true,
    },
    xl: {
      'm-0': true,
      'px-4': true,
      'py-0': true,
      'min-w-[64px]': true,
      'min-h-[48px]': true,
      'm-l-1.5': true,
      'first-of-type:m-l-auto': true,
      'border-1': true,
      'rounded-md': true,
      'group-[.button-group]/button:rounded-none': true,
      'group-[.button-group]/button:first-of-type:rounded-l-md': true,
      'group-[.button-group]/button:last-of-type:rounded-r-md': true,
      'font-extrabold	': true,
      'text-lg': true,
      'shadow-lg': isSolid,
      'focus:shadow-md': isSolid,
      'active:shadow-md': isSolid,
      'focus:outline-2': true,
      'active:outline-2': true,
    },
  }
  const classesByVariant = {
    solid: {
      'text-default-600': true,
      'hover:text-default-500': true,
      'dark:text-default-400': true,
      'dark:hover:text-default-500': true,
      'bg-white': true,
      'hover:bg-default-50': true,
      'active:bg-default-100': true,
      'focus:bg-default-100': true,
      'dark:bg-default-900': true,
      'dark:hover:bg-default-850': true,
      'dark:active:bg-default-800': true,
      'dark:focus:bg-default-800': true,
      'border-default-300': true,
      'hover:border-default-400': true,
      'focus:border-blue-500': true,
      'active:border-blue-500': true,
      'dark:border-default-800': true,
      'dark:hover:border-default-700': true,
      'dark:focus:border-blue-500': true,
      'dark:active:border-blue-500': true,
    },
    outline: {
      'text-default-600': true,
      'hover:text-default-500': true,
      'dark:text-default-400': true,
      'dark:hover:text-default-500': true,
      'border-default-300': true,
      'hover:border-default-400': true,
      'focus:border-blue-500': true,
      'active:border-blue-500': true,
      'dark:border-default-800': true,
      'dark:hover:border-default-700': true,
      'dark:focus:border-blue-500': true,
      'dark:active:border-blue-500': true,
    },
    ghost: {
      'text-default-600': true,
      'hover:text-default-500': true,
      'dark:text-default-400': true,
      'dark:hover:text-default-500': true,
      'border-transparent': true,
      'hover:border-default-400': true,
      'focus:border-blue-500': true,
      'active:border-blue-500': true,
      'dark:hover:border-default-700': true,
      'dark:focus:border-blue-500': true,
      'dark:active:border-blue-500': true,
    },
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
      relative: true,
      'inline-flex': true,
      'items-center': true,
      'justify-center': true,
      'shrink-0': true,
      'whitespace-nowrap': true,
      transition: true,
      'duration-150': true,
      'focus:outline': true,
      'active:outline': true,
      'focus:outline-offset-0': true,
      'active:outline-offset-0': true,
      'hover:z-10': true,
      'focus:z-20': true,
      'active:z-20': true,
    },
    getClasses({ size, variant }),
    {
      'active:pt-px': true,
      'focus:pt-px': true,
      'focus:outline': true,
      'active:outline': true,
      'focus:outline-blue-500': true,
      'active:outline-blue-500': true,
    },
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
    'inline-flex': true,
    'items-stretch': true,
    'gap-0': true,
    'button-group': true,
    'group/button': true,
  })
  if (Array.isArray(children)) console.dir(children.length)
  return <div className={classnames}>{children}</div>
}
