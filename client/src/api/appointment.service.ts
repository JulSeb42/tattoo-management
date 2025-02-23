/*=============================================== Appointment service ===============================================*/

import { http } from "api"
import { generateServerRoute } from "utils"
import type { SERVER_PATHS } from "shared"
import type { ApiResponse, IAppointment } from "types"

type PATHS = keyof typeof SERVER_PATHS.APPOINTMENT

const generateRoute = (
    route: Exclude<PATHS, "ROOT">,
    id?: string
) => generateServerRoute("APPOINTMENT", route, id)

class AppointmentService {
    allAppointments(): ApiResponse<Array<IAppointment>> {
        return http.get(generateRoute("ALL_APPOINTMENTS"))
    }

    getAppointment(id: string): ApiResponse<IAppointment> {
        return http.get(generateRoute("GET_APPOINTMENT", id))
    }
}

export const appointmentService = new AppointmentService()
