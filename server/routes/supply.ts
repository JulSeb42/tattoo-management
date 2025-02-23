/*=============================================== Supply routes ===============================================*/

import { Router } from "express"
import { SERVER_PATHS } from "../../shared"
import { SupplyModel } from "../models"

const router = Router()

const { SUPPLY: PATHS } = SERVER_PATHS

/*====================== Get all Supplys ======================*/

router.get(PATHS.ALL_SUPPLIES, async (_, res, next) => {
    return await SupplyModel.find()
        .then(foundSupplys => res.status(200).json(foundSupplys))
        .catch(err => next(err))
})

/*====================== Get Supply by id ======================*/

router.get(PATHS.GET_SUPPLY(), async (req, res, next) => {
    return await SupplyModel.findById(req.params.id)
        .then(foundSupply => res.status(200).json(foundSupply))
        .catch(err => next(err))
})

export default router
