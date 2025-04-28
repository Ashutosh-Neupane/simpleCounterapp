import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div> Counter :{count}</div>
    <div onClick={() => setCount(count + 1)}>+</div><div onClick={() => setCount(count - 1)}>-</div>
    
    </>
  )
}

export default App
