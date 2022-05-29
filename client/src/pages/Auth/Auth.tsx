import React, { useContext, useState, type FC } from "react"
import { useLocation } from "react-router"
import Form from "../../components/Form/Form"
import { AuthContext } from "../../context/AuthContext"

const Auth: FC = () => {
	const { pathname } = useLocation()
	const { onLogin, onRegister } = useContext(AuthContext)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const generateLoginForm = () => {
		return <Form handleSubmit={(e) => onLogin(e, { email, password, cb: clearFields })}></Form>
	}
	const generateRegisterForm = () => {
		return (
			<Form
				handleSubmit={(e) =>
					onRegister(e, { firstName, lastName, email, password, cb: clearFields })
				}></Form>
		)
	}
	const clearFields = () => {
		setFirstName("")
		setLastName("")
		setEmail("")
		setPassword("")
	}
	return (
		<>
			{pathname === "/" && generateLoginForm()}
			{pathname === "/register" && generateRegisterForm()}
		</>
	)
}

export default Auth
