import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <h2 className='text-xl'>Hello Tailwind</h2>
      <Outlet />
    </>
  )
}

export default App
