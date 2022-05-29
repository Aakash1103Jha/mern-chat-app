import React, { type FC, createContext, useState } from "react"
import CommonProps from "../interfaces/CommonProps"
import { ILoginData, IRegisterData, IResetPasswordData } from "../interfaces/UserDataProps"

export const AuthContext = createContext({
	isLoggedIn: true,

	onLogin: (e: React.FormEvent<HTMLFormElement>, LoginData: ILoginData) => {},
	onRegister: (e: React.FormEvent<HTMLFormElement>, RegisterData: IRegisterData) => {},
	onResetPassword: (
		e: React.FormEvent<HTMLFormElement>,
		ResetPasswordData: IResetPasswordData,
	) => {},
	onLogout: () => {},
})

const AuthProvider: FC<CommonProps> = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	const onLogin = (e: React.FormEvent<HTMLFormElement>, LoginData: ILoginData) => {
		e.preventDefault()
	}
	const onRegister = (e: React.FormEvent<HTMLFormElement>, RegisterData: IRegisterData) => {}

	const onResetPassword = (
		e: React.FormEvent<HTMLFormElement>,
		ResetPasswordData: IResetPasswordData,
	) => {}

	const onLogout = () => {}

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, onLogin, onRegister, onResetPassword, onLogout }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
