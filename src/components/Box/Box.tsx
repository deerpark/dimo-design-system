import { PropsWithChildren } from 'react'
import { cx } from '../../lib/utils'
import { CommonProps, StyleOptionProps } from '../../interfaces'

export default function Box({
  children,
  className,
  border,
  rounded,
  padding,
  shadow,
  ...props
}: PropsWithChildren<StyleOptionProps<CommonProps>>) {
  const classnames = cx(
    'group-hover:opacity-75 bg-background-primary',
    {
      'rounded-md': rounded,
      shadow: shadow,
      'p-5': padding,
      'border-px border-border-secondary': border,
    },
    className
  )
  return (
    <div className={classnames} {...props}>
      {children}
    </div>
  )
}
