import Router from 'next/router'

import { RecoilRoot } from 'recoil'

import Layout from '../components/Layout'

import nProgress from 'nprogress'

import '../styles/globals.css'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', () => nProgress.start())

  Router.events.on('routeChangeError', () => nProgress.done())

  Router.events.on('routeChangeComplete', () => nProgress.done())
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
