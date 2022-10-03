import { PropsWithChildren, ReactElement, useEffect, useState } from "react";
import { createContextAndHook } from "./context-utils"

export interface CatFactContext {
    fact: string
}

const {
    Context,
    contextHook
} = createContextAndHook<CatFactContext>();

export const useCatFactContext = contextHook;

export const CatFactContextProvider = (props: PropsWithChildren): ReactElement => {
    const [fact, setFact] = useState("This is a fact");
    const populateFact = async (): Promise<void> => {
        const resp = await fetch('https://catfact.ninja/fact');
        const respJson = await resp.json();
        setFact(respJson.fact);
    }

    useEffect(() => {
        populateFact();
    }, [])

    return (
        <Context.Provider
            value={{
                fact
            }}
        >
            {props.children}
        </Context.Provider>
    )
}
