import { Outlet } from 'react-router-dom'
import { Box } from '../Box'
import './Layout.css'

export default function Root() {
  return (
    <div className='main'>
      <div className='body'>
        <Outlet />
      </div>
      <Box className='footer'>&copy; DT Hub</Box>
    </div>
  )
}
