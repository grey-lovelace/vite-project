import { Box } from '@mui/material';
import { useState } from 'react'
import { useCatFactContext } from './CatFactContext'

function FactDisplay() {
    const [count, setCount] = useState(0)
    const catFactContext = useCatFactContext();

    return (
        <Box className="fact-display">
            <h1>FACT:</h1>
            <h3>{catFactContext.fact}</h3>
        </Box>
    )
}

export default FactDisplay
