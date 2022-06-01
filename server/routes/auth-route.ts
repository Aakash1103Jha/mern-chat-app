import { Router } from "express"
import { onLogin, onRegister, onResetPassword } from "../controllers/auth-controller"
import { validateToken } from "../middlewares/validateToken"

const authRoute = Router()

authRoute.post("/login", onLogin)
authRoute.post("/register", onRegister)
authRoute.post("/reset-password", validateToken, onResetPassword)
authRoute.post("/logout", onLogin)

export default authRoute
