import { Box, Typography } from '@mui/material';
import { useState } from 'react'
import { useCatFactContext } from './CatFactContext'

function FactDisplay() {
    const [count, setCount] = useState(0)
    const catFactContext = useCatFactContext();

    return (
        <Box className="fact-display">
            <Typography>FACT:</Typography>
            <Typography>{catFactContext.fact}</Typography>
        </Box>
    )
}

export default FactDisplay
