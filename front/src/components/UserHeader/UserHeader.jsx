import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "../../store/authSlice"
import { changeUsername } from "../../services/userServices"

const UserHeader = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth) || {}
  const [newUsername, setnewUsername] = useState(user.userName || "")
  const [isEditing, setIsEditing] = useState(false)

  const handleEditing = () => {
    setIsEditing(true)
  }

  const handleInputChange = (e) => {
    setnewUsername(e.target.value)
  }

  const handleSaveNewUsername = async () => {
    try {
      dispatch(setUser({ ...user, userName: newUsername }));
      setIsEditing(false);
      
      const payload = {
        userName: newUsername,
      };
      
      await changeUsername(payload, user.token);
    } catch (error) {
      console.error("Failed to change username:", error);
    }
  };
  

  return (
    <div className="header">
      <h1>
        Welcome back <br />
        {isEditing ? (
          <input
            type="text"
            value={newUsername}
            onChange={handleInputChange}
            autoFocus
          />
        ) : (
          `${user.userName || "[Pseudo]"}`
        )}
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
