import { PropsWithChildren } from 'react'
import cx from 'classnames'
import { CommonProps } from '../../interfaces'

export default function Container({ children, className, ...props }: PropsWithChildren<CommonProps>) {
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

Container.Root = ({ children, className, ...props }: PropsWithChildren<CommonProps>) => {
  const classNames = cx(
    {
      'min-h-screen': true,
      'min-w-screen': true,
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
