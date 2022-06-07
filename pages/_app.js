import Router from 'next/router'

import Layout from '../components/Layout'

import nProgress from 'nprogress'

import '../styles/globals.css'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => nProgress.start())

  Router.events.on('routeChangeError', () => nProgress.done())

  Router.events.on('routeChangeComplete', () => nProgress.done())
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
