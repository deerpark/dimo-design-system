import { createBrowserRouter, Navigate, DataRouteObject } from 'react-router-dom'
import { RootLayout, Error, Layout } from './components/Layout'
import Main from './components/Main'
import ButtonPage from './components/Docs/Button'

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
          {
            index: true,
            id: 'design-system-index',
            element: <Navigate to={`/design-system/components`} replace={true} />, // 리디렉션 : design-system/components
          },
          {
            path: 'components',
            id: 'components',
            element: <Layout.Sub />,
            errorElement: <Error />,
            children: [
              {
                index: true,
                id: 'components-index',
                element: <Navigate to={`/design-system/components/inputs`} replace={true} />, // 리디렉션 : design-system/components/inputs/button
              },
              {
                path: 'inputs',
                id: 'components-inputs',
                element: <Layout.Contents />,
                errorElement: <Error />,
                children: [
                  {
                    index: true,
                    id: 'components-inputs-index',
                    element: <Navigate to={`/design-system/components/inputs/button`} replace={true} />, // 리디렉션 : design-system/components/button/inputs
                  },
                  {
                    path: 'button',
                    id: 'components-inputs-button',
                    element: <ButtonPage />,
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
