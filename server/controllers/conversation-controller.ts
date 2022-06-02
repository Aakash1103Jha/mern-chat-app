import { Request, Response } from "express"
import Conversation from "../models/Conversation"

export const newConversation = async (req: Request, res: Response) => {
	if (!req.body) return res.status(400).json("Converstaion data missing!")
	try {
		const newConversation = new Conversation({
			members: [req.body.senderId, req.body.receiverId],
		})
		return res.status(200).json(newConversation)
	} catch (err) {
		console.error(`New conversation error: ${err}`)
		return res.status(500).json((err as Error).message)
	}
}
