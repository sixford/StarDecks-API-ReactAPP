import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-body-black">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="src/components/assets/logo.png"
            width="100"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Link>
        <Link 
        className="navbar-brand navbar-font" to="/films">Films</Link>
        {/* Add other navbar items here */}
      </div>
    </nav>
  )
}