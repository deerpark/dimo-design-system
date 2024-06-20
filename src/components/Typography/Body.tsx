import * as React from 'react'
import { cx } from '../../lib/utils'
import { CommonProps } from '../../interfaces'
import { Slot, Slottable } from '@radix-ui/react-slot'

type BodyProps = {
  asChild?: boolean
  token:
    | 'text-body1'
    | 'text-body2'
    | 'text-body3'
    | 'text-body4'
    | 'text-body5'
    | 'text-body6'
} & React.PropsWithChildren<Omit<CommonProps, 'onClick'>>

export function Body({
  children,
  asChild,
  token = 'text-body1',
  className,
  ...props
}: BodyProps) {
  const classnames = cx(token, className)
  const Component = asChild ? Slot : 'div'
  return (
    <Component className={classnames} {...props}>
      <Slottable>{children}</Slottable>
    </Component>
  )
}
