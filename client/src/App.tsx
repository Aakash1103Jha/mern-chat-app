import { lazy, Suspense, useContext, type FC } from "react"
import { Route, Routes, Navigate } from "react-router"

import { AuthContext } from "./context/AuthContext"
import Loader from "./components/Loader/Loader"

const Auth = lazy(() => import("./pages/Auth/Auth"))
const Chat = lazy(() => import("./pages/Chat/Chat"))

const App: FC = () => {
	const { isLoggedIn } = useContext(AuthContext)

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<Loader />}>
							<Auth />
						</Suspense>
					}
				/>
				<Route
					path="/register"
					element={
						<Suspense fallback={<Loader />}>
							<Auth />
						</Suspense>
					}
				/>
				<Route
					path="/reset-password"
					element={
						<Suspense fallback={<Loader />}>
							<Auth />
						</Suspense>
					}
				/>
				<Route
					path="/conversations"
					element={
						isLoggedIn === true ? (
							<Suspense fallback={<Loader />}>
								<Chat />
							</Suspense>
						) : (
							<Navigate to="/" />
						)
					}
				/>
			</Routes>
		</>
	)
}

export default App
