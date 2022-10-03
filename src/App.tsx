import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CatFactContextProvider, useCatFactContext } from './CatFactContext'
import FactDisplay from './FactDisplay'
import { Box, Button } from '@mui/material'

function App() {
    const [count, setCount] = useState(0)

    return (
        <Box className="App">
            <h1>Vite + React</h1>
            <Button
                onClick={() => setCount(current => current + 1)}
            >
                count is {count}
            </Button>
            <CatFactContextProvider>
                <FactDisplay/>
            </CatFactContextProvider>
        </Box>
    )
}

export default App
