import * as React from 'react'
import { cx } from '../../lib/utils'
import { CommonProps } from '../../interfaces'
import { Slot, Slottable } from '@radix-ui/react-slot'

type DisplayProps = {
  asChild?: boolean
  token: 'text-display1' | 'text-display2' | 'text-display3' | 'text-display4'
} & React.PropsWithChildren<Omit<CommonProps, 'onClick'>>

const H = {
  'text-display1': 'h1',
  'text-display2': 'h2',
  'text-display3': 'h3',
  'text-display4': 'h4',
} as const

export function Display({
  children,
  asChild,
  token = 'text-display1',
  className,
  ...props
}: DisplayProps) {
  const classnames = cx(token, className)
  const Component = asChild ? Slot : H[token]
  return (
    <Component className={classnames} {...props}>
      <Slottable>{children}</Slottable>
    </Component>
  )
}
