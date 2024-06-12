/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Outlet, useParams } from 'react-router-dom'
import { cx, getVersion } from '../../lib/utils'
import {
  DimoNavigationState,
  NavigationPage,
  useDimoNav,
} from '../../router.config'

export default function Root() {
  const params = useParams() as DimoNavigationState
  const dimoNav = useDimoNav()
  const pages = Object.keys(dimoNav.pages) as NavigationPage[]
  return (
    <div className='min-w-screen flex min-h-screen flex-1 flex-col'>
      <header className='shadow-custom shrink-0 bg-white'>
        <div className='mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-none items-center space-x-3'>
            <Link to='/design-system/components'>
              <svg
                className='flex-none'
                width='70'
                height='15.217'
                viewBox='0 0 92 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.41 19.564H2.012A2.015 2.015 0 0 1 0 17.55V2.45C0 1.339.903.436 2.013.436h9.396a7.055 7.055 0 0 1 7.047 7.047v5.034a7.055 7.055 0 0 1-7.047 7.047Zm-7.383-4.027h7.382a3.025 3.025 0 0 0 3.02-3.02V7.483a3.025 3.025 0 0 0-3.02-3.02H4.027v11.074ZM31.332 19.564a2.015 2.015 0 0 1-2.013-2.014V2.45c0-1.111.902-2.014 2.013-2.014 1.11 0 2.014.903 2.014 2.014v15.1c0 1.111-.903 2.014-2.014 2.014ZM61.322 19.564a2.015 2.015 0 0 1-2.013-2.014V8.49l-3.926 5.235a2.012 2.012 0 0 1-3.222 0L48.235 8.49v9.06c0 1.111-.903 2.014-2.014 2.014a2.015 2.015 0 0 1-2.013-2.014V2.45A2.01 2.01 0 0 1 45.584.54a2.016 2.016 0 0 1 2.248.702l5.94 7.92 5.94-7.92a2.014 2.014 0 0 1 3.624 1.208v15.1c0 1.111-.903 2.014-2.014 2.014ZM81.76 20c-5.514 0-10-4.487-10-10s4.486-10 10-10c5.513 0 10 4.487 10 10s-4.487 10-10 10Zm0-15.973A5.98 5.98 0 0 0 75.785 10a5.982 5.982 0 0 0 5.974 5.973A5.982 5.982 0 0 0 87.733 10a5.982 5.982 0 0 0-5.974-5.973Z'
                  fill='currentColor'
                />
              </svg>
            </Link>
            <div className='flex items-center rounded-full bg-slate-400/10 px-3 py-1 text-xs font-semibold leading-5'>
              {getVersion()}
            </div>
          </div>
          <div className='flex-1' />
          <div className='relative ml-auto hidden flex-none items-center lg:flex'>
            <ul className='text-md flex flex-none items-center space-x-8 font-bold'>
              {pages.map(page => (
                <li key={page}>
                  <Link to={`/design-system/${page}`}>
                    <span
                      className={cx('capitalize', {
                        'text-brand-primary': params.page === page,
                      })}
                    >
                      {page}
                    </span>
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link to='/design-system/blog'>
                  <span>Blog</span>
                </Link>
              </li> */}
            </ul>
            <div className='ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-slate-800'>
              <Link to='#'>
                <span>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='h-6 w-6'
                  >
                    <path
                      d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                      className='stroke-slate-400 dark:stroke-slate-500'
                    ></path>
                    <path
                      d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                      className='stroke-slate-400 dark:stroke-slate-500'
                    ></path>
                  </svg>
                </span>
              </Link>
              <Link
                to='#'
                className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
              >
                <span>
                  <span className='sr-only'>DDS on GitHub</span>
                  <svg
                    viewBox='0 0 16 16'
                    className='h-5 w-5'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
