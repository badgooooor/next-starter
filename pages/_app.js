import { Provider } from "mobx-react";
import { useStore } from "../stores";
import "../styles/tailwind.scss";

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
