import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchUser } from "../services/userServices"

const initialState = {
  token: null,
  id: null,
  email: null,
  userName: null,
  firstName: null,
  lastName: null,
  loading: false,
  error: null,
}

export const initializeAuth = createAsyncThunk(
  "auth/initializeAuth",
  async (_, { dispatch, rejectWithValue }) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      dispatch(login({ token }));
      try {
        const userData = await fetchUser(token);
        dispatch(setUser({
          id: userData.id,
          email: userData.email,
          userName: userData.userName,
          firstName: userData.firstName,
          lastName: userData.lastName,
        }));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        return rejectWithValue(error.response.data); 
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token
    },
    setUser(state, action) {
      const { id, email, userName, firstName, lastName } = action.payload
      state.id = id
      state.email = email
      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
    },
    setUserName(state, action) {
      const { userName } = action.payload
      state.userName = userName
    },
    logout(state) {
      state.token = null
      state.id = null
      state.email = null
      state.userName = null
      state.firstName = null
      state.lastName = null
      localStorage.removeItem("token")
      sessionStorage.removeItem("token")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeAuth.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(initializeAuth.fulfilled, (state) => {
        state.loading = false
      })
      .addCase(initializeAuth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })
  },
})

export const { login, setUser, setUserName, logout } = authSlice.actions
export default authSlice.reducer
