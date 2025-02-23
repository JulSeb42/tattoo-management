/*=============================================== Appointment routes ===============================================*/

import { Router } from "express"
import { SERVER_PATHS } from "../../shared"
import { AppointmentModel } from "../models"

const router = Router()

const { APPOINTMENT: PATHS } = SERVER_PATHS

/*====================== Get all Appointments ======================*/

router.get(PATHS.ALL_APPOINTMENTS, async (_, res, next) => {
    return await AppointmentModel.find()
        .then(foundAppointments => res.status(200).json(foundAppointments))
        .catch(err => next(err))
})

/*====================== Get Appointment by id ======================*/

router.get(PATHS.GET_APPOINTMENT(), async (req, res, next) => {
    return await AppointmentModel.findById(req.params.id)
        .then(foundAppointment => res.status(200).json(foundAppointment))
        .catch(err => next(err))
})

export default router
