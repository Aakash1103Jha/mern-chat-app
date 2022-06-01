import { Schema, Model, model } from "mongoose"
import { IUser } from "../interfaces/IUser"

const UserSchema: Schema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
})

const User: Model<IUser> = model("users", UserSchema)

export default User
