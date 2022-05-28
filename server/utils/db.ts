import { connect } from "mongoose"

const connectToDb = () => {
	try {
		connect(process.env.URI as string, () => console.info(`MongoDB Atlas connected!`))
	} catch (err) {
		console.error(`Error in connecting to DB: ${err}`)
	}
}

export default connectToDb
