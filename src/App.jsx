import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Filtro from './components/Filtro'
import ResidentInfo from './components/ResidentInfo'

function App() {
  
  const [characters, setCharacters] = useState([])
  const [ text, setText ] = useState('')

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(res => setCharacters(res.data.results))
  }, [])

  const charactersFilters = characters.filter(character => character.name.
    toLowerCase().includes(text.toLocaleLowerCase()))
  console.log(characters);
  
  return (
    <div className='container'>
        <Filtro  text={text} setText={setText} />
        <ResidentInfo  characters={charactersFilters}  /> 
    </div>
 )
}

export default App
