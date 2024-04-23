import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./assets/yoda-star-wars-logo-clip-art-star-wars.jpg" alt="Logo" />
        </Link>
        {/* Add other navbar items here */}
      </div>
    </nav>
  )
}