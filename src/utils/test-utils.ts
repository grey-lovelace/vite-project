import { act, render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export const flushPromises = (): Promise<void> => new Promise(resolve => process.nextTick(resolve));

const customRender = async (ui: ReactElement, path: string = '/') => {
    window.history.pushState({}, '', path);
    await act(async () => {
        render(ui, {
            wrapper: (BrowserRouter)
        });
        await flushPromises();
    });
}


export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };