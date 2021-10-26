import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/finaxis-header-footer.css'
import '../styles/finaxis-style.css'
import '../styles/fin.css'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
