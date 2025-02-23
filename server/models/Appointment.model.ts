/*=============================================== Appointment model ===============================================*/

import { Schema, model } from "mongoose"
import type { IAppointment } from "../../shared/types"

const appointmentSchema = new Schema<IAppointment>(
    {
        
    },
    { timestamps: true }
)

export const AppointmentModel = model<IAppointment>("Appointment", appointmentSchema)
