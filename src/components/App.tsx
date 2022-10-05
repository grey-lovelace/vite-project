import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import FactsPage from './FactsPage'

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<FactsPage/>}
            />
            <Route
                path='/newRoute'
                element={<Box>This is a different page</Box>}
            />
        </Routes>
    )
}

export default App
