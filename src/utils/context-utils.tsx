import { createContext, useContext } from "react";

export function createContextAndHook<T>() {
    const Context = createContext<T | undefined>(undefined);
    const contextHook = (): T => {
        const currentContext = useContext(Context);
        if (currentContext) {
            return currentContext;
        }
        throw Error('Context not currently defined.');
    }
    return {
        Context,
        contextHook
    }
}