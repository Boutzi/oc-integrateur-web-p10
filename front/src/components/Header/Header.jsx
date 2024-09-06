import { Link, useNavigate } from "react-router-dom"
import logo from "../../../public/argentBankLogo.webp"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/authSlice"

export default function Header() {
  const token = useSelector((state) => state.auth.token)
  const userName = useSelector((state) => state.auth.userName)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <div>
          {token ? (
            <div>
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {userName}
              </Link>

              <Link className="main-nav-item" to="/" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                Sign out
              </Link>
            </div>
          ) : (
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
