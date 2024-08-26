import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/"
import Header from "./components/Header/Header"
import Footer from "./components/Footer"
import User from "./pages/User"
import Login from "./pages/Login"
import Error from "./pages/Error/"
import PrivateRoute from "./utils/privateRoute"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App