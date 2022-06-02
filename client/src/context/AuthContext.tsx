import React, { type FC, createContext, useState } from "react"
import { useNavigate } from "react-router"
import CommonProps from "../interfaces/CommonProps"
import { ILoginData, IRegisterData, IResetPasswordData } from "../interfaces/UserDataProps"

const BASE_URL = "http://localhost:4000/api"

export const AuthContext = createContext({
	isLoggedIn: true,
	error: "",
	clearError: () => {},
	onLogin: (e: React.FormEvent<HTMLFormElement>, LoginData: ILoginData) => {},
	onRegister: (e: React.FormEvent<HTMLFormElement>, RegisterData: IRegisterData) => {},
	onResetPassword: (
		e: React.FormEvent<HTMLFormElement>,
		ResetPasswordData: IResetPasswordData,
	) => {},
	onLogout: () => {},
})

const AuthProvider: FC<CommonProps> = (props) => {
	const navigate = useNavigate()
	const [isLoggedIn, setIsLoggedIn] = useState(true)
	const [error, setError] = useState("")

	const onLogin = async (e: React.FormEvent<HTMLFormElement>, LoginData: ILoginData) => {
		e.preventDefault()
		try {
			// const res = await fetch(`${BASE_URL}/auth/login`)
			// const data = await res.json()
			// if (res.status !== 200) return setError(data)
			// console.log(data)
			setIsLoggedIn(true)
			return navigate("/conversations")
		} catch (err) {
			return console.error(`Login error: ${(err as Error).message}`)
		}
	}
	const onRegister = (e: React.FormEvent<HTMLFormElement>, RegisterData: IRegisterData) => {}

	const onResetPassword = (
		e: React.FormEvent<HTMLFormElement>,
		ResetPasswordData: IResetPasswordData,
	) => {}

	const onLogout = () => {}

	const clearError = () => setError("")

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				onLogin,
				onRegister,
				onResetPassword,
				onLogout,
				error,
				clearError,
			}}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
