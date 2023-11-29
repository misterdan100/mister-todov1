import { useState } from 'react'
import CreateSection from './components/CreateSection'
import './App.css'
import TaskSection from './components/TaskSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-container bg-gray-100 bg-opacity-50 backdrop-blur-xl w-[900px] p-4 flex justify-between gap-6 mt-6 border-2 border-gray-200 rounded-2xl shadow-lg'>
        <CreateSection />
        <TaskSection />
      </div>
    </>
  )
}

export default App
