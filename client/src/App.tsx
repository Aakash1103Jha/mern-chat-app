import { useContext, type FC } from "react"
import { Route, Routes, Navigate } from "react-router"
import { AuthContext } from "./context/AuthContext"
import Auth from "./pages/Auth/Auth"

const App: FC = () => {
	const { isLoggedIn } = useContext(AuthContext)

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={isLoggedIn === true ? <Auth /> : <Navigate to={"/register"} />}
				/>
				<Route path="/register" element={<Auth />} />
				<Route path="/reset-password" element={<Auth />} />
			</Routes>
		</>
	)
}

export default App
