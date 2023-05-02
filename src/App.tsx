import { RouterProvider } from 'react-router-dom'
import { router } from './router.config'
import './App.css'
import { Spinner } from './components/Layout'

function App() {
  return <RouterProvider router={router} fallbackElement={<Spinner isFull />} />
}

export default App
