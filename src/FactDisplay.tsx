import { useState } from 'react'
import { useCatFactContext } from './CatFactContext'

function FactDisplay() {
    const [count, setCount] = useState(0)
    const catFactContext = useCatFactContext();

    return (
        <div className="fact-display">
            <h1>FACT:</h1>
            <h3>{catFactContext.fact}</h3>
        </div>
    )
}

export default FactDisplay
