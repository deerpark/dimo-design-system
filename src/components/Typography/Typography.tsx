import * as React from 'react'
import { cx } from '../../lib/utils'
import { CommonProps } from '../../interfaces'
import { Slot, Slottable } from '@radix-ui/react-slot'

const H = {
  'text-display1': 'h1',
  'text-display2': 'h2',
  'text-display3': 'h3',
  'text-display4': 'h4',
} as const

type DisplayToken =
  | 'text-display1'
  | 'text-display2'
  | 'text-display3'
  | 'text-display4'
type HeadlineToken = 'text-headline1' | 'text-headline2'
type LabelToken = 'text-label1' | 'text-label2' | 'text-label3' | 'text-label4'
type BodyToken =
  | 'text-body1'
  | 'text-body2'
  | 'text-body3'
  | 'text-body4'
  | 'text-body5'
  | 'text-body6'

type TypoProps =
  | { variant: 'display'; asChild?: boolean; token: DisplayToken }
  | { variant: 'headline'; asChild?: boolean; token: HeadlineToken }
  | { variant: 'label'; asChild?: boolean; token: LabelToken }
  | { variant: 'body'; asChild?: boolean; token: BodyToken }

export default function Typography({
  variant,
  children,
  asChild,
  token,
  className,
  ...props
}: TypoProps & React.PropsWithChildren<Omit<CommonProps, 'onClick'>>) {
  let Component
  const classnames = cx(token, className)

  switch (variant) {
    case 'display':
      Component = asChild ? Slot : H[token]
      break
    case 'headline':
      Component = asChild ? Slot : token === 'text-headline1' ? 'h5' : 'h6'
      break
    case 'label':
      Component = asChild ? Slot : 'label'
      break
    case 'body':
      Component = asChild ? Slot : 'div'
      break
    default:
      Component = asChild ? Slot : 'div'
  }

  return (
    <Component className={classnames} {...props}>
      <Slottable>{children}</Slottable>
    </Component>
  )
}
