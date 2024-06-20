import * as React from 'react'
import { cx } from '../../lib/utils'
import { CommonProps } from '../../interfaces'
import { Slot, Slottable } from '@radix-ui/react-slot'

type LabelProps = {
  asChild?: boolean
  token: 'text-label1' | 'text-label2' | 'text-label3' | 'text-label4'
} & React.PropsWithChildren<Omit<CommonProps, 'onClick'>>

export function Label({
  children,
  asChild,
  token = 'text-label1',
  className,
  ...props
}: LabelProps) {
  const classnames = cx(token, className)
  const Component = asChild ? Slot : 'label'
  return (
    <Component className={classnames} {...props}>
      <Slottable>{children}</Slottable>
    </Component>
  )
}
