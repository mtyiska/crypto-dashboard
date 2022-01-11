import '../styles/globals.css'
import "tailwindcss/tailwind.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
