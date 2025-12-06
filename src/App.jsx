import { useState } from 'react'
import './App.css'
import PokemonContainer from './components/PokemonConteiner'
import Typebar from './components/TypeBar'

function App() {
  const [type, setType] = useState('fire')

  return (
    <>
      <img src='https://archives.bulbagarden.net/media/upload/4/4b/Pokédex_logo.png'/>
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