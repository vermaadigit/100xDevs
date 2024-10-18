import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
    Hii There !!
    <Counter></Counter>
  </div>
}


function Counter() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1)
  }

  return <div>
    <h1 id = "text" >{count}</h1>
    <button onClick = {increaseCount} >Increase Count</button>
  </div>
}

export default App
