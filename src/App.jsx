import { useState } from 'react'
import AppNavbar from './components/navbar'
import './App.css'
    import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
     <AppNavbar/>
     </div>
    </>
  )
}

export default App
