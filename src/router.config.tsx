import { createBrowserRouter, Navigate, DataRouteObject } from 'react-router-dom'
import { RootLayout, Error, Layout } from './components/Layout'
import Main from './components/Main'
import { Button } from './components'

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
            element: <Navigate to={`components`} replace={true} />, // 리디렉션 : design-system/components
          },
          {
            path: 'components',
            id: 'components',
            element: <Layout.Sub />,
            errorElement: <Error />,
            children: [
              {
                index: true,
                path: 'inputs',
                id: 'components-inputs',
                element: <Navigate to={`button`} replace={true} />, // 리디렉션 : design-system/components/button/inputs
              },
              {
                path: 'button',
                id: 'components-inputs-button',
                element: <Button />,
                errorElement: <Error />,
              },
            ],
          },
        ],
      },
    ],
  },
]

export const router = createBrowserRouter(routes)
