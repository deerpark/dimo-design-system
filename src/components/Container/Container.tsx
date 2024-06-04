import { PropsWithChildren } from 'react'
import { cx } from '../../lib/utils'
import { CommonProps } from '../../interfaces'

export default function Container({
  children,
  className,
  ...props
}: PropsWithChildren<CommonProps>) {
  const classNames = cx(
    {
      'mx-auto': true,
      container: true,
    },
    className
  )
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}

Container.Root = ({
  children,
  className,
  ...props
}: PropsWithChildren<CommonProps>) => {
  const classNames = cx(
    {
      'flex-1': true,
      'flex-centered': true,
    },
    className
  )
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  )
}
