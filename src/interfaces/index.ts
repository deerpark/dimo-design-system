export type ComponentSize = 'mini' | 'small' | 'medium' | 'default' | 'large'
export type ComponentVariant = 'solid' | 'outline' | 'ghost'

export type StyleOptionProps<P> = P & {
  size?: ComponentSize
  rounded?: boolean
  border?: boolean
  primary?: boolean
  variant?: ComponentVariant
  shadow?: boolean
  padding?: boolean
}

export type CommonProps = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>
  style?: React.CSSProperties
}

export type SubSubItem = {
  name: string
  href: string
  current?: boolean
}

export type SubItem = {
  name: string
  href: string
  current?: boolean
  children?: SubSubItem[]
}

export type NavigationItem = {
  name: string
  href?: string
  current?: boolean
  children?: SubItem[]
}

export type NavigationType = {
  [key: string]: NavigationItem[]
}
