import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-orange-200 text-black text-5xl font-bold underline">
      Hello world!
    </h1>
    <Card channel = "Coffee date" btntext = "click me" />   
    <Card channel = "I am live" btntext = "visit me" />     
    </>
  )
}

export default App
