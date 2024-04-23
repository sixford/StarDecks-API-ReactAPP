import { Outlet, Link } from 'react-router-dom'
// import backgroundVideo from '../assets/star-background.mp4'

import Navbar from '../Navbar'
import Footer from '../Footer'

export default function Root() {

  return (
    <>
      {/* Header / Nav */}
      <header>
        <Navbar />
      </header>

      {/* Main Page Content */}
      <main>
        {/* <video autoPlay loop muted id='video'>
          <source src={backgroundVideo} type='video/mp4' />
        </video> */}
        {/* This is where the page component should be rendered */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}


