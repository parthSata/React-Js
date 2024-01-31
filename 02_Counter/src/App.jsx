import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  const inceresedValue = () => {
    // counter = counter + 1
    // if (counter === 20) {
    //   alert('You have Exceeded the counter limit')
    // } else {
      setCounter(prevCounter => prevCounter + 1)
      
    // }
  }

  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter -1)
  }

  console.log("counter:",counter)
  return (
    <>
      <h1>Hello Parth</h1>
      <h3>Counter Value : {counter} </h3>

      <button onClick={inceresedValue}>Add Value {counter} </button><br />
      <button onClick={removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
