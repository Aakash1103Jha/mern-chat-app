import { Router } from "express"

import { newConversation } from "../controllers/conversation-controller"
import { validateToken } from "../middlewares/validateToken"

const conversationRoute = Router()

conversationRoute.post("/new", newConversation)

export default conversationRoute
