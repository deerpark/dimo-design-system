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
      'bg-default-50': true,
      'dark:bg-default-900': true,
      'border-default-400': border,
      'dark:border-default-600': border,
    },
    className
  )
  return (
    <div className={classnames} {...props}>
      {children}
    </div>
  )
}
