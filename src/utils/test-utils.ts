/* eslint-disable import/export */
import { act, render } from "@testing-library/react";

export const flushPromises = (): Promise<void> => new Promise(resolve => process.nextTick(resolve));

const customRender = async (ui: any, options: any = {}) => {
    await act(async () => {
        render(ui, {
            // wrap provider(s) here if needed
            wrapper: ({ children }) => children,
            ...options,
        });
        await flushPromises();
    });
}


export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// override render export
export { customRender as render };