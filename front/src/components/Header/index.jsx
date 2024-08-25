import { Link } from "react-router-dom"
import logo from "../../../public/argentBankLogo.png"

export default function Header() {
  return (
    <header className="header">
      <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
    </header>
  )
}
