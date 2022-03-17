import '../styles/globals.css'
import '../styles/fun.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <div>
 <Layout >
 <Component {...pageProps} />
 </Layout>
    </div>
  )
}

export default MyApp
