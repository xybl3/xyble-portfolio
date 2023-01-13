import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { saveState } from "../state/localStorage";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  store.subscribe(() => {
    console.log("Updating state");
    switch (store.getState().theme) {
      case true:
        document.getElementById("page")?.classList.add("dark");
        break;
      case false:
        document.getElementById("page")?.classList.remove("dark");
        break;
    }
    saveState(store.getState());
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
