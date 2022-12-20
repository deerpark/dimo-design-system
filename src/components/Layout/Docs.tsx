import { Outlet } from 'react-router-dom'

export default function Layout() {
  return <Outlet />
}

function LayoutSub() {
  return <Outlet />
}

function LayoutContents() {
  return <Outlet />
}

Layout.Sub = LayoutSub
Layout.Contents = LayoutContents
