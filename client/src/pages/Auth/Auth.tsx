import React, { useContext, useState, type FC } from "react"
import { useLocation } from "react-router"

import { NavLink } from "react-router-dom"
import Button from "../../components/Button/Button"
import Form from "../../components/Form/Form"
import { AuthContext } from "../../context/AuthContext"

import styles from "./Auth.module.css"

const Auth: FC = () => {
	const { pathname } = useLocation()
	const { onLogin, onRegister, onResetPassword, error, clearError } = useContext(AuthContext)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearError()
		setFirstName(e.target.value)
	}
	const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearError()
		setLastName(e.target.value)
	}
	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearError()
		setEmail(e.target.value)
	}
	const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearError()
		setPassword(e.target.value)
	}
	const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		clearError()
		setConfirmPassword(e.target.value)
	}
	const clearFields = () => {
		setFirstName("")
		setLastName("")
		setEmail("")
		setPassword("")
		clearError()
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (pathname === "/") return onLogin(e, { email, password, cb: clearFields })
		if (pathname === "/register")
			return onRegister(e, { firstName, lastName, email, password, cb: clearFields })
		if (pathname === "/reset-password")
			return onResetPassword(e, { email, newPassword: password, cb: clearFields })
	}
	return (
		<div className={`${styles.auth}`}>
			<Form handleSubmit={(e) => handleSubmit(e)}>
				{pathname === "/" && <h1>Login 🚀</h1>}
				{pathname === "/register" && <h1>Register 🚀</h1>}
				{pathname === "/reset-password" && <h1>Reset Password 🚀</h1>}
				{pathname === "/register" && (
					<>
						<label htmlFor="firstName">
							First Name<span className="required"> *</span>
						</label>
						<input
							type="text"
							placeholder="Jane"
							value={firstName}
							onChange={onFirstNameChange}
							required={pathname === "/register" ? true : false}
						/>
						<label htmlFor="lastName">
							Last Name<span className="required"> *</span>
						</label>
						<input
							type="text"
							placeholder="Doe"
							value={lastName}
							onChange={onLastNameChange}
							required={pathname === "/register" ? true : false}
						/>
					</>
				)}
				<label htmlFor="email">
					Email<span className="required"> *</span>
				</label>
				<input
					type="email"
					placeholder="jane.doe@example.com"
					value={email}
					onChange={onEmailChange}
					required={true}
				/>
				<label htmlFor="password">
					{pathname === "/reset-password" ? "New Password" : "Password"}
					<span className="required"> *</span>
				</label>
				<input
					type="password"
					placeholder="SecurePassword@123"
					value={password}
					onChange={onPasswordChange}
					required={true}
				/>
				{(pathname === "/register" || pathname === "/reset-password") && (
					<>
						<label htmlFor="confirmPassword">
							Confirm Password<span className="required"> *</span>
						</label>
						<input
							type="password"
							placeholder="SecurePassword@123"
							value={confirmPassword}
							onChange={onConfirmPasswordChange}
							required={pathname === "/register" ? true : false}
						/>
					</>
				)}
				{error.length !== 0 && <div className="error">{error}</div>}
				{pathname === "/reset-password" && (
					<>
						<Button id="register_btn" label="Reset Password" />
						<div className={`${styles.auth_cta}`}>
							<NavLink to="/">Back to Login page</NavLink>
						</div>
					</>
				)}
				{pathname === "/register" && (
					<>
						<Button id="register_btn" label="Register" />
						<div className={`${styles.auth_cta}`}>
							<NavLink to="/">Login</NavLink> instead?
						</div>
					</>
				)}
				{pathname === "/" && (
					<>
						<Button id="login_btn" label="Login" />
						<div className={`${styles.auth_cta}`}>
							<NavLink to="/register">Register</NavLink> now?
						</div>
						<div className={`${styles.auth_cta}`}>
							<NavLink to="/reset-password">Forgot Password?</NavLink>
						</div>
					</>
				)}
			</Form>
		</div>
	)
}

export default Auth
