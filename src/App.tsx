import SearchBar from './components/SearchBar'
import { Typography } from '@mui/material'

function App() {
  return (
    <div className="App">
        <Typography 
          variant='h1' 
          component='div' 
          color='#000'
          className='header'>
            Recipe Search
        </Typography>
        <SearchBar />
    </div>
  )
}

export default App
