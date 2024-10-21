import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// useEffect, dependency array, cleanups
function App() {


  return <div>
    <Counter></Counter>
  </div>
}


// mounting, re-rendering, unmounting

function Counter() {
  

  useEffect(function() {
    console.log("mount")

    return function() {
      console.log("unmount")
    }
  }, [])

  return <div>
    Counter!
  </div>
}


// function Counter() {

//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount(count + 1)
//   }

//   function decreaseCount() {
//     setCount(count - 1)
//   }

//   function resetCount() {
//     setCount(0)
//   }

//   return <div>
//     <h1 id = "text" >{count}</h1>
//     <button onClick = {increaseCount} >Increase Count</button>
//     <button onClick = {decreaseCount} >Decrease Count</button>
//     <br></br>
//     <br></br>
//     <button onClick = {resetCount} >Reset Count</button>
//   </div>
// }



export default App
