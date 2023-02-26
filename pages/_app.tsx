import SideNav from "@components/SideNav";
import type { AppProps } from "next/app";
import { css } from "emotion";
import './app.css'
const styles = {
   wrap: css({ display: "flex", height: "100vh", overflowY: "auto"}),
};
export default function App({ Component, pageProps }: AppProps) {
   return (
      <div className={styles.wrap}>
         <SideNav rand="Hello" />
         <Component {...pageProps} />
      </div>
   );
}
