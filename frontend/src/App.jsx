import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='h-screen font-light bg-gray-700 p-4 overflow-auto'>
        <Nav/>
        <Mainroutes/>
    </div>
  )
}

export default App