import { useState } from 'react'
import './App.css'
import PokemonContainer from './components/PokemonConteiner'
import Typebar from './components/TypeBar'

function App() {
  const [type, setType] = useState('fire')

  return (
    <>
      <label>Pokedex</label>
      <Typebar 
        setType={setType}
      />
      <h1>{type}</h1>
      <PokemonContainer 
        type={type}
      />
    </>
  )
}

export default App