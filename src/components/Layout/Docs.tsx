/* eslint-disable jsx-a11y/anchor-is-valid */
import cx from 'classnames'
import { useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { DimoNavigationState, useDimoNav } from '../../router.config'
import ButtonPage from '../Docs/Button'
import NavigationPage from '../Docs/Navigation'

export default function Layout() {
  return <Outlet />
}

function LayoutSub() {
  const params = useParams() as DimoNavigationState
  const { current, page, components, hashs, setDimoNav } = useDimoNav(params)
  const hash  = useLocation().hash?.replace('#', '') as DimoNavigationState['hash']
  useEffect(() => {
    setDimoNav({ ...params, hash: hash || (hashs?.length ? hashs[0].name : undefined) })
  }, [params, hash, hashs, setDimoNav])
  return (
    <div className='flex-1 mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8'>
      {components?.length ?
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
                            'block py-1 px-4 text-base leading-6 underline-offset-2 capitalize'
                          )}
                        >
                          {item.name.replaceAll('-', ' ')}
                        </a>
                      ) : (
                        <Disclosure as='div' defaultOpen={item.name === current.component?.name} className='flex flex-col'>
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={cx(
                                  item.name === current.component?.name
                                    ? 'font-bold text-slate-700'
                                    : 'font-semibold text-slate-500 hover:text-slate-400 hover:underline',
                                  'flex justify-between py-1 px-4 gap-x-3 text-base leading-6 underline-offset-2 capitalize'
                                )}
                              >
                                {item.name}
                                <ChevronRightIcon
                                  className={cx(open ? 'rotate-90 text-slate-500' : 'text-slate-400', 'h-5 w-5 shrink-0')}
                                  aria-hidden='true'
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel as='ul' className='mt-1 mb-4 pl-4'>
                                {item.children?.map(subItem => (
                                  <li key={subItem.name}>
                                    <Disclosure.Button
                                      as='a'
                                      href={subItem.href}
                                      className={cx(
                                        subItem.name === current.section?.name
                                          ? 'font-bold text-brand-primary'
                                          : 'font-normal text-slate-500 hover:text-slate-400 hover:underline',
                                        'block py-1 px-4 gap-x-3 text-sm leading-4 underline-offset-2'
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
        </aside> : null}

      <main className='flex-1 flex flex-col'>
        <div className='flex flex-centered flex-1 flex-col'>
          <div className='container flex flex-1 flex-col'>
            <div className='flex flex-1 flex-col'>
              <h2 className='flex-none text-2xl text-slate-900 dark:text-slate-100 capitalize'>{(params.section || params.component || page)?.replaceAll('-', ' ')}</h2>
              <div className='flex-none mb-10 text-md font-normal capitalize flex items-center space-x-2'>
                {(params.component || params.section)?.replaceAll('-', ' ') && <span className='opacity-50 last-of-type:opacity-70'>{page?.replaceAll('-', ' ')}</span>}{params.component && <><i className="opacity-20">/</i><span className='opacity-50 last-of-type:opacity-70'>{params.component?.replaceAll('-', ' ')}</span></>}{params.section && <><i className="opacity-20">/</i><span className='opacity-50 last-of-type:opacity-70'>{params.section?.replaceAll('-', ' ')}</span></>}
              </div>
              <div className='flex-1'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-none flex-centered'>
          <div className='container py-10 flex-centered text-xs text-slate-300 dark:text-slate-700'>&copy; DT Hub</div>
        </div>
      </main>

      <aside className='sticky top-8 hidden w-44 shrink-0 xl:block'>
        <ul className='-mx-2 space-y-1'>
          {hashs ?
            hashs.map(subItem => (
                <li key={subItem.name}>
                  <a
                    href={subItem.href}
                    className={cx(
                      subItem.name === (current.hash?.name || hashs[0].name) ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-300 hover:underline',
                      'block rounded-md py-1 px-2 text-xs leading-4 underline-offset-2 capitalize'
                    )}
                  >
                    {subItem.name.replaceAll('-', ' ')}
                  </a>
                </li>
              ))
            : null}
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
    <div className='flex-1 pt-20 pb-40 flex flex-centered text-slate-400 dark:text-slate-500'>
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
      ) : (
        <NotFond />
      )
    ) :
    component === 'navigation' ? (<NavigationPage />) : (
      <NotFond />
    )
  ) : (
    <NotFond />
  )
}

Layout.Sub = LayoutSub
Layout.Contents = LayoutContents
Layout.SubContents = LayoutSubContents


