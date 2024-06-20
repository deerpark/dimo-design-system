import * as React from 'react'
import { cx } from '../../lib/utils'
import { SubSubItem } from '../../interfaces'
import { useLocation } from 'react-router-dom'

export default function Toc() {
  const [toc, setToc] = React.useState<SubSubItem[]>([])
  const [hash, setHash] = React.useState('')
  const location = useLocation()

  React.useLayoutEffect(() => {
    setHash(window.location.hash)
  }, [location])
  React.useLayoutEffect(() => {
    const hashes = document
      .getElementById('contents')
      ?.getElementsByTagName('h3')
    setToc(
      (hashes ? Array.from(hashes) : [])
        ?.filter(h3 => h3.role === 'navigation')
        .map(h3 => ({
          name: h3.textContent,
          href: h3.id,
        })) as SubSubItem[]
    )
  }, [])
  return (
    <>
      {toc.map(subItem => (
        <li key={subItem.name}>
          <a
            href={`#${subItem.href}`}
            className={cx(
              `#${subItem.href}` === (hash || `#${toc[0].href}`)
                ? 'text-brand-primary'
                : 'text-slate-400 hover:text-slate-300 hover:underline',
              'block rounded-md px-2 py-1 text-xs capitalize leading-4 underline-offset-2'
            )}
          >
            {subItem.name.replaceAll('-', ' ')}
          </a>
        </li>
      ))}
    </>
  )
}
