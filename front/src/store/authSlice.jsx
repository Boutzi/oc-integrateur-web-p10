import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  id: null,
  email: null,
  userName: null,
  firstName: null,
  lastName: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
    },
    setUser(state, action) {
      const { id, email, userName, firstName, lastName } = action.payload;
      state.id = id;
      state.email = email;
      state.userName = userName;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    setUserName(state, action) {
      const {userName} = action.payload;
      state.userName = userName;
    },
    logout(state) {
      state.token = null;
      state.id = null;
      state.email = null;
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
    },
  },
});

export const { login, setUser, setUserName, logout } = authSlice.actions;
export default authSlice.reducer;
