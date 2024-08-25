// import PropTypes from "prop-types"

import { useState } from "react"
import { userLogin } from "../../services/userServices"
import { useNavigate } from "react-router-dom"

const Form = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfos = {
      email: username,
      password: password,
    }
    const payload = JSON.stringify(userInfos)

    userLogin(payload)
      .then((response) => {
        console.log("Réponse serveur : ", response)
        navigate("/user")
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  )
}

// Form.propTypes = {
//     handlesubmit: PropTypes.func.isRequired
// }

export default Form
