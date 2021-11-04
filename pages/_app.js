import Layout from '../components/Layout'
import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" /> */}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
