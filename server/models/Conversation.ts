import { Schema, Model, model } from "mongoose"
import { IConversation } from "../interfaces/IConversation"

const ConversationSchema: Schema = new Schema(
	{
		members: Array,
	},
	{ timestamps: true },
)

const Conversation: Model<IConversation> = model("conversations", ConversationSchema)

export default Conversation
