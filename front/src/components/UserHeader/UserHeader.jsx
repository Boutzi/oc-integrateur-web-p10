import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "../../store/authSlice"
import { changeUsername } from "../../services/userServices"

const UserHeader = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth) || {}
  const [newUsername, setnewUsername] = useState()
  const [isEditing, setIsEditing] = useState(false)

  const handleEditing = () => {
    setnewUsername(user.userName)
    setIsEditing(true)
  }

  const handleInputChange = (e) => {
    setnewUsername(e.target.value)
  }

  const handleSaveNewUsername = async () => {
    if (newUsername.trim().length < 2) {
      return
    }
    try {
      dispatch(setUserName({ ...user, userName: newUsername }))
      setIsEditing(false)

      const payload = {
        userName: newUsername,
      }

      await changeUsername(payload, user.token)
    } catch (error) {
      console.error("Failed to change username:", error)
    }
  }

  return (
    <div className="header">
      {isEditing ? (
        <div className="edit-user-info">
          <h2>Edit user info</h2>
          <div>
            <label htmlFor="username">User name:</label>
            <input
              id="username"
              className="edit-user edit-username-input"
              type="text"
              value={newUsername !== undefined ? newUsername : user.userName}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSaveNewUsername()
                }
                if (e.key === "Escape" || e.key === "ESC") {
                  setIsEditing(false)
                }
              }}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input
              id="firstName"
              className="edit-user --not-editable"
              type="text"
              value={user.firstName || "[First Name]"}
              readOnly
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input
              id="lastName"
              className="edit-user --not-editable"
              type="text"
              value={user.lastName || "[Last Name]"}
              readOnly
            />
          </div>
        </div>
      ) : (
        <h1>
          Welcome back <br />
          {`${user.userName || "[Username]"} `} !
        </h1>
      )}

      {isEditing ? (
        <div className="edit-buttons">
          <button
            className="edit-button-on"
            onClick={handleSaveNewUsername}>
            Save Name
          </button>
          <button
            className="edit-button-on"
            onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="edit-button" onClick={handleEditing}>
          Edit Name
        </button>
      )}
    </div>
  )
}

export default UserHeader
