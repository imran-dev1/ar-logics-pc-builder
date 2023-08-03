import '../styles/globals.css'
import { StyleProvider } from "@ant-design/cssinjs";
export default function MyApp({ Component, pageProps }) {
   // Use the layout defined at the page level, if available
   const getLayout = Component.getLayout || ((page) => page);

   return getLayout(
      <StyleProvider hashPriority="high">
         <Component {...pageProps} />
      </StyleProvider>
   );
}
