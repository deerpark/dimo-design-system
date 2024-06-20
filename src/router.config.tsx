import {
  createBrowserRouter,
  /* Navigate,  */ DataRouteObject,
} from 'react-router-dom'
import { RootLayout, Error, Layout } from './components/Layout'
import Main from './components/Main'
import { useState, useMemo } from 'react'

export const navigation = {
  docs: [],
  components: [
    {
      name: 'forms',
      href: '/design-system/components/forms',
      children: [
        {
          name: 'button',
          href: '/design-system/components/forms/button',
        },
        {
          name: 'typography',
          href: '/design-system/components/forms/typography',
        },
        {
          name: 'select-box',
          href: '/design-system/components/forms/select-box',
        },
      ],
    },
    { name: 'lists', href: '/design-system/components/lists' },
    { name: 'data-display', href: '/design-system/components/data-display' },
    { name: 'headings', href: '/design-system/components/headings' },
    {
      name: 'application-shells',
      href: '/design-system/components/application-shells',
    },
    { name: 'feedback', href: '/design-system/components/feedback' },
    {
      name: 'navigation',
      href: '/design-system/components/navigation',
      children: [
        {
          name: 'navbars',
          href: '/design-system/components/navigation/navbars',
        },
        {
          name: 'pagination',
          href: '/design-system/components/navigation/pagination',
        },
        { name: 'tabs', href: '/design-system/components/navigation/tabs' },
      ],
    },
    { name: 'overlays', href: '/design-system/components/overlays' },
    { name: 'elements', href: '/design-system/components/elements' },
    { name: 'layout', href: '/design-system/components/layout' },
  ],
  template: [],
  example: [],
}

export const routes: DataRouteObject[] = [
  {
    path: '/', // 메인
    id: 'root',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        id: 'root-index',
        element: <Main />,
      },
      {
        path: 'design-system', // design-system
        id: 'design-system',
        element: <Layout />,
        errorElement: <Error />,
        children: [
          /* {
            index: true,
            id: 'design-system-index',
            element: <Navigate to={`/design-system/components`} replace={true} />, // 리디렉션 : design-system/components
          }, */
          {
            path: ':page',
            id: 'page',
            element: <Layout.Sub />,
            errorElement: <Error />,
            children: [
              /* {
                index: true,
                id: 'components-index',
                element: <Navigate to={`/design-system/components/forms`} replace={true} />, // 리디렉션 : design-system/components/forms/button
              }, */
              {
                path: ':component',
                id: 'components-component',
                element: <Layout.Contents />,
                errorElement: <Error />,
                children: [
                  {
                    index: true,
                    id: 'components-index',
                    element: <Layout.SubContents />,
                  },
                  {
                    path: ':section',
                    id: 'components-forms-section',
                    element: <Layout.SubContents />,
                    errorElement: <Error />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

type NavigationType = typeof navigation
type NavigationPageObj = NavigationType[keyof NavigationType][number]
export type NavigationPage = keyof NavigationType
type NavigationComponent = NavigationPageObj['name']
type NavigationComponentObj = Extract<
  NavigationPageObj,
  { children: any }
>['children'][number]
type NavigationSection = NavigationComponentObj['name']

export type DimoNavigationState = {
  page: NavigationPage
  component?: NavigationComponent
  section?: NavigationSection
  hash?: string
}

export function useDimoNav(
  params: DimoNavigationState = {
    page: 'components',
  }
) {
  const [dimoNav, setDimoNav] = useState<DimoNavigationState>(params)

  const { page, component, section } = dimoNav

  /**
   * 컴포넌트 객체 목록 ex) [{forms},{lists}],
   */
  const pages = navigation

  /**
   * 컴포넌트 객체 목록 ex) [{forms},{lists}],
   */
  const components = useMemo(() => page && navigation[page], [page])

  /**
   * 컴포넌트 하위 섹션 객체 목록 ex) [{button},{text}],
   */
  const sections = useMemo(() => {
    const parent = components.find(c => c.name === component)
    return parent && 'children' in parent ? parent.children : undefined
  }, [components, component])

  /**
   * 현재 하이라이트 된 객체
   */
  const current = useMemo(() => {
    return {
      page: navigation[page],
      component: components && components.find(c => c.name === component),
      section: sections && sections.find(s => s.name === section),
    }
  }, [components, sections, page, component, section])

  return { ...dimoNav, pages, components, sections, current, setDimoNav }
}
