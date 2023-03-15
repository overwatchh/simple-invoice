import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider as StoreProvider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { AppStore, RootState, store as defaultStore } from "@/store";
import { preloadedState as defaultPreloadedState } from "./index.config";
// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = defaultPreloadedState,
    // Automatically create a store instance if no store was passed in
    store = defaultStore,
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <StoreProvider store={store}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>{children}</BrowserRouter>
        </I18nextProvider>
      </StoreProvider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
