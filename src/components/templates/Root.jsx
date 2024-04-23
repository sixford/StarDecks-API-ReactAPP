import { Outlet, Link } from 'react-router-dom'

import Navbar from '../Navbar'

export default function Root() {

  return (
    <>
      {/* Header / Nav */}
      <header>
        <Navbar />
      </header>

      {/* Main Page Content */}
      <main>
        {/* This is where the page component should be rendered */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <span className="small">&copy; Star Wars API {new Date().getFullYear()}</span>
      </footer>
    </>
  )
}


