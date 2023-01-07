import { StoreContextProvider } from "../global/StoreContext";
import { Roboto } from "@next/font/google";

import "../styles/globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </StoreContextProvider>
  );
}
