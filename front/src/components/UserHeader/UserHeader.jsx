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
      <h1>
        Welcome back <br />
        {isEditing ? (
          <input
            className="edit-username-input"
            type="text"
            value={newUsername || user.userName}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSaveNewUsername()
              } 
              if (e.key === "Escape") {
                setIsEditing(false)
              }
              if (e.key === "ESC") {
                setIsEditing(false)
              }
            }}
            autoFocus
          />
        ) : (
          `${user.userName || "[Pseudo]"} `
        )}
        !
      </h1>
      {isEditing ? (
        <button
          className="edit-button edit-button--save"
          onClick={handleSaveNewUsername}>
          Save Name
        </button>
      ) : (
        <button className="edit-button" onClick={handleEditing}>
          Edit Name
        </button>
      )}
    </div>
  )
}

export default UserHeader
