import { PropsWithChildren } from 'react'
import cx from 'classnames'
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
    {
      'rounded-md': rounded,
      'border-px': border,
      'shadow dark:dhadow-dk': shadow,
      'p-5': padding,
      'group-hover:opacity-75': true,
    },
    {
      'bg-background-primary dark:bg-inverse-background-primary': true,
      'border-border-secondary dark:border-inverse-border-secondary': border,
    },
    className
  )
  return (
    <div className={classnames} {...props}>
      {children}
    </div>
  )
}
