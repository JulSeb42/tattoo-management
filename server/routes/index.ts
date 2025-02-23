/*=============================================== All routes ===============================================*/

import { Router } from "express"
import { SERVER_PATHS } from "../../shared"
import auth from "./auth"
import users from "./users"
import uploader from "./uploader"
import supply from "./supply"
import appointment from "./appointment"
/* Prepend import - DO NOT REMOVE */

const router = Router()

router.get("/", (_, res) => {
    res.json("All good in here")
})

router.use(SERVER_PATHS.AUTH.ROOT, auth)
router.use(SERVER_PATHS.USERS.ROOT, users)
router.use(SERVER_PATHS.UPLOADER.ROOT, uploader)
router.use(SERVER_PATHS.SUPPLY.ROOT, supply)
router.use(SERVER_PATHS.APPOINTMENT.ROOT, appointment)
/* Prepend router - DO NOT REMOVE */

export default router
