import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { CatFactContextProvider } from './CatFactContext'
import FactDisplay from './FactDisplay'

function FactsPage() {
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

export default FactsPage
