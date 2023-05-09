export type ComponentSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'
export type ComponentVariant = 'solid' | 'outline' | 'ghost'

export type StyleOptionProps<P> = P & {
  size?: ComponentSize,
  rounded?: boolean,
  border?: boolean,
  primary?: boolean,
  variant?: ComponentVariant,
  shadow?: boolean,
  padding?: boolean,
}

export type CommonProps = {
  className?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  style?: React.CSSProperties,
}
