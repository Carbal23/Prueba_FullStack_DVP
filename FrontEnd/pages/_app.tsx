import Layout from "components/Layout/Layout";
import type { AppProps } from "next/app";
import AppContext from "context/AppContext";
import useApp from "hooks/useApp";
import "../public/styles/global.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  const useAppHook = useApp();

  return (
    <AppContext.Provider value={{useAppHook}}>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </AppContext.Provider>
  );
}
