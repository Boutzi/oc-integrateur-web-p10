import { configureStore } from "@reduxjs/toolkit";
import authReducer, { login, setUser } from "./authSlice";
import { fetchUser } from "../services/userServices";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

const initializeAuth = async () => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    store.dispatch(login({ token }));
    try {
      const userData = await fetchUser(token);
      store.dispatch(setUser({
        id: userData.id,
        email: userData.email,
        userName: userData.userName,
        firstName: userData.firstName,
        lastName: userData.lastName,
      }));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  }
};

initializeAuth();

export default store;
