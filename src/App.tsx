import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CatFactContextProvider, useCatFactContext } from './CatFactContext'
import FactDisplay from './FactDisplay'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Vite + React</h1>
            <button
                onClick={() => setCount(current => current + 1)}
            >
                count is {count}
            </button>
            <CatFactContextProvider>
                <FactDisplay/>
            </CatFactContextProvider>
        </div>
    )
}

export default App
