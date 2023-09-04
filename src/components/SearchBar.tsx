import TextField from '@mui/material/TextField/TextField'
import Recipes from './Recipes'
import { useEffect, useState } from 'react'
import { Box, Container } from '@mui/material'

function SearchBar() {
  const [input, setInput] = useState('')
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  
  const APP_ID = "e142bde9"
  const APP_KEY = "067a7e536b287fd4420063e9ab504029"

  const getRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&random=true&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
      console.log(data.hits)
    } catch (err) {
      console.error(err)
    }}

  useEffect(() => {
    getRecipes()
  }, [query])
  

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      getInput(e)
    }
  }

  const getInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(input)
    setInput('')
  }

  
  return (
    <Container>
      <Box className='search-box'>
        <TextField
          id="standard-basic"
          type="text"
          placeholder="Search a Recipe"
          className="search-bar"
          onInput={(e) => setInput((e.target as HTMLInputElement).value)}
          onKeyDown={handleKeyPress}
          value={input}
        />
      </Box>
      <Box>
       {<Recipes recipeList={recipes} />}  
      </Box>
    </Container>
  )
}

export default SearchBar