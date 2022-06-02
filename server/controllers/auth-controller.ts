import { Request, Response } from "express"
import { hash, genSalt, compare } from "bcrypt"
import { sign } from "jsonwebtoken"

import User from "../models/User"
import { checkPassword } from "../utils/checkPassword"

export const onLogin = async (req: Request, res: Response) => {
	if (!req.body) return res.status(400).json("Mandatory details are required")
	try {
		const USER = await User.findOne({ email: req.body.email })
		if (!USER) return res.status(400).json("User not found")

		const isPasswordCorrect = await compare(req.body.password, USER.password)
		if (isPasswordCorrect === false) return res.status(400).json("Incorrect password")

		const TOKEN = sign({ id: USER._id }, process.env.TOKEN_SECRET as string, {
			noTimestamp: false,
			expiresIn: "1 day",
		})
		return res.status(200).json(TOKEN)
	} catch (err) {
		console.error(`Login error: ${err}`)
		return res.status(500).json((err as Error).message)
	}
}

export const onRegister = async (req: Request, res: Response) => {
	if (!req.body) return res.status(400).json("Mandatory details are required")
	try {
		const USER = await User.findOne({ email: req.body.email })
		if (USER) return res.status(400).json("Email already in use")

		const isPasswordStrong = checkPassword(req.body.password)
		if (isPasswordStrong === false) return res.status(400).json("Password is not strong enough")

		const hashPassword = await hash(req.body.password, await genSalt(20))

		const newUser = new User({
			...req.body,
			password: hashPassword,
		})
		await newUser.save()
		return res.status(200).json("Registered successfully. Proceed to Login")
	} catch (err) {
		console.error(`Register error: ${err}`)
		return res.status(500).json((err as Error).message)
	}
}

export const onResetPassword = async (req: Request, res: Response) => {
	if (!req.body) return res.status(400).json("Mandatory details are required")
	try {
		const USER = await User.findOne({ email: req.body.email })
		if (!USER) return res.status(400).json("User not found")
		const newPassword = await hash(req.body.password, await genSalt(20))
		await User.findOneAndUpdate(
			{ email: req.body.email },
			{ $set: { password: newPassword } },
			{ upsert: false },
		)
		return res.status(200).json("Password changed successfully!")
	} catch (err) {
		console.error(`Reset Password error: ${err}`)
		return res.status(500).json((err as Error).message)
	}
}

export const onLogout = async (req: Request, res: Response) => {
	if (!req.body) return res.status(400).json("Mandatory details are required")
	try {
		return res.status(200).clearCookie("")
	} catch (err) {
		console.error(`Logout error: ${err}`)
		return res.status(500).json((err as Error).message)
	}
}
