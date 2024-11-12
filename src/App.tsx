import { useState } from 'react'
import './App.css'
import { Button } from './components'



function App() {
  const [count, setCount] = useState(0)
  const [playerName, setName] = useState('Jair')

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const player = () => {
    setName('Neymar')
  }

  

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}/>
      <p>{playerName}</p>
      <Button label={'Jugador de Futbol'} parentMethod={player}/>
        {/* <button className='custom-button' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  )
}

export default App
