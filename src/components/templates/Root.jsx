import { Outlet, Link } from 'react-router-dom'

export default function Root() {

  return (
    <>
      {/* Header / Nav */}
      <header>
        <nav>
          <Link to="/"></Link>
          <Link to="/films">Films</Link>
        </nav>
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


