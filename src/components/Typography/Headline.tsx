import * as React from 'react'
import { cx } from '../../lib/utils'
import { CommonProps } from '../../interfaces'
import { Slot, Slottable } from '@radix-ui/react-slot'

type HeadlineProps = {
  asChild?: boolean
  token: 'text-headline1' | 'text-headline2'
} & React.PropsWithChildren<Omit<CommonProps, 'onClick'>>

export function Headline({
  children,
  asChild,
  token = 'text-headline1',
  className,
  ...props
}: HeadlineProps) {
  const classnames = cx(token, className)
  const Component = asChild ? Slot : token === 'text-headline1' ? 'h5' : 'h6'
  return (
    <Component className={classnames} {...props}>
      <Slottable>{children}</Slottable>
    </Component>
  )
}
