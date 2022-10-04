import { Route, Routes } from 'react-router-dom'
import FactsPage from './FactsPage'

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<FactsPage/>}
            />
        </Routes>
    )
}

export default App
