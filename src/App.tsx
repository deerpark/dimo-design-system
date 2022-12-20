import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main'
import Button from './components/Docs/Button'
import { RootLayout, Layout, Error } from './components/Layout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Main />} />
          <Route path='design-system' element={<Layout />}>
            <Route index element={<Navigate to='components' replace={true} />} />
            <Route path='components' element={<Layout.Sub />}>
              <Route index element={<Navigate to='inputs' replace={true} />} />
              <Route path='inputs' element={<Layout.Contents />}>
                <Route index element={<Navigate to='button' replace={true} />} />
                <Route path='button' element={<Button />} />
                {/* <Route path='text-field' element={<TextField />} />
                  <Route path='select' element={<Select />} />
                  <Route path='switch' element={<Switch />} />
                  <Route path='checkbox' element={<Checkbox />} />
                  <Route path='button-group' element={<ButtonGroup />} /> */}
                <Route path='*' element={<Error />} />
              </Route>
              <Route path='*' element={<Error />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
