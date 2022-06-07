import { Navbar, Footer } from '.'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mt-10">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
