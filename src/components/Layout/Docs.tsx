/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { DimoNavigationState, useDimoNav } from '../../router.config'
import { cx } from '../../lib/utils'
import ButtonPage from '../Docs/Button'
import NavigationPage from '../Docs/Navigation'
import Toc from './Toc'
import TypographyPage from '../Docs/Typography'

export default function Layout() {
  return <Outlet />
}

function LayoutSub() {
  const params = useParams() as DimoNavigationState
  const { current, page, components, setDimoNav } = useDimoNav(params)
  const hash = useLocation().hash?.replace('#', '')
  React.useEffect(() => {
    setDimoNav({
      ...params,
      hash,
    })
  }, [params, hash, setDimoNav])
  return (
    <div className='mx-auto flex w-full max-w-7xl flex-1 items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8'>
      {components?.length ? (
        <aside className='sticky top-8 hidden w-44 shrink-0 lg:block'>
          <nav className='flex flex-1 flex-col'>
            <ul className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul className='-mx-2 space-y-1'>
                  {components.map(item => (
                    <li key={item.name}>
                      {!('children' in item) ? (
                        <a
                          href={item.href}
                          className={cx(
                            item.name === current.component?.name
                              ? 'font-bold text-brand-primary'
                              : 'font-semibold text-slate-500 hover:text-slate-400 hover:underline',
                            'block px-4 py-1 text-base capitalize leading-6 underline-offset-2'
                          )}
                        >
                          {item.name.replaceAll('-', ' ')}
                        </a>
                      ) : (
                        <Disclosure
                          as='div'
                          defaultOpen={item.name === current.component?.name}
                          className='flex flex-col'
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={cx(
                                  item.name === current.component?.name
                                    ? 'font-bold text-slate-700'
                                    : 'font-semibold text-slate-500 hover:text-slate-400 hover:underline',
                                  'flex justify-between gap-x-3 px-4 py-1 text-base capitalize leading-6 underline-offset-2'
                                )}
                              >
                                {item.name}
                                <ChevronRightIcon
                                  className={cx(
                                    open
                                      ? 'rotate-90 text-slate-500'
                                      : 'text-slate-400',
                                    'h-5 w-5 shrink-0'
                                  )}
                                  aria-hidden='true'
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel
                                as='ul'
                                className='mb-4 mt-1 pl-4'
                              >
                                {item.children?.map(subItem => (
                                  <li key={subItem.name}>
                                    <Disclosure.Button
                                      as='a'
                                      href={subItem.href}
                                      className={cx(
                                        subItem.name === current.section?.name
                                          ? 'font-bold text-brand-primary'
                                          : 'font-normal text-slate-500 hover:text-slate-400 hover:underline',
                                        'block gap-x-3 px-4 py-1 text-sm leading-4 underline-offset-2'
                                      )}
                                    >
                                      {subItem.name.replaceAll('-', ' ')}
                                    </Disclosure.Button>
                                  </li>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
      ) : null}

      <main className='flex flex-1 flex-col'>
        <div className='flex-centered flex flex-1 flex-col'>
          <div className='container flex flex-1 flex-col'>
            <div className='flex flex-1 flex-col'>
              <h2 className='flex-none text-2xl capitalize text-content-primary'>
                {(params.section || params.component || page)?.replaceAll(
                  '-',
                  ' '
                )}
              </h2>
              <div className='text-md mb-10 flex flex-none items-center space-x-2 font-normal capitalize'>
                {(params.component || params.section)?.replaceAll('-', ' ') && (
                  <span className='opacity-50 last-of-type:opacity-70'>
                    {page?.replaceAll('-', ' ')}
                  </span>
                )}
                {params.component && (
                  <>
                    <i className='opacity-20'>/</i>
                    <span className='opacity-50 last-of-type:opacity-70'>
                      {params.component?.replaceAll('-', ' ')}
                    </span>
                  </>
                )}
                {params.section && (
                  <>
                    <i className='opacity-20'>/</i>
                    <span className='opacity-50 last-of-type:opacity-70'>
                      {params.section?.replaceAll('-', ' ')}
                    </span>
                  </>
                )}
              </div>
              <div id='contents' className='flex-1'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-centered flex-none'>
          <div className='flex-centered container py-10 text-xs text-content-tertiary'>
            &copy; Agile Works
          </div>
        </div>
      </main>

      <aside className='sticky top-8 hidden w-44 shrink-0 xl:block'>
        <ul className='-mx-2 space-y-1'>
          <Toc />
        </ul>
      </aside>
    </div>
  )
}

function LayoutContents() {
  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex-1'>
        <Outlet />
      </div>
    </div>
  )
}

function NotFond() {
  return (
    <div className='flex-centered flex flex-1 pb-40 pt-20 text-content-tertiary'>
      페이지를 찾을 수 없습니다.
    </div>
  )
}

function LayoutSubContents() {
  const { page, component, section } = useParams()
  return page === 'components' ? (
    component === 'forms' ? (
      section === 'button' ? (
        <ButtonPage />
      ) : section === 'typography' ? (
        <TypographyPage />
      ) : (
        <NotFond />
      )
    ) : component === 'navigation' ? (
      <NavigationPage />
    ) : (
      <NotFond />
    )
  ) : (
    <NotFond />
  )
}

Layout.Sub = LayoutSub
Layout.Contents = LayoutContents
Layout.SubContents = LayoutSubContents
