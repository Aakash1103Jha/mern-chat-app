import express, { Application, Request, Response } from "express"
import cors from "cors"
import { resolve } from "path"

import authRoute from "../routes/auth-route"

const app: Application = express()
const MODE = process.env.MODE

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if (MODE === "dev") app.use(express.static(resolve(__dirname, "..", "..", "client", "build")))
if (MODE === "prod") app.use(express.static(resolve(__dirname, "build")))

app.use("/api", () => {})

app.use("/api/auth/", authRoute)

app.get("*", async (req: Request, res: Response) => {
	try {
		if (MODE === "dev")
			return res
				.status(200)
				.sendFile(resolve(__dirname, "..", "..", "client", "build", "index.html"))
		if (MODE === "prod")
			return res.status(200).sendFile(resolve(__dirname, "build", "index.html"))
	} catch (err) {
		console.error(`Error loading page: ${err}`)
	}
})

export default app
