import { PropsWithChildren } from 'react'
import cx from 'classnames'
import { CommonProps, StyleOptionProps } from '../../interfaces'

export default function Box({
  children,
  className,
  border,
  rounded,
  ...props
}: PropsWithChildren<StyleOptionProps<CommonProps>>) {
  const classnames = cx(
    {
      'rounded-md': rounded,
      'border-px': border,
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
