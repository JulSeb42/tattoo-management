/*=============================================== Supply service ===============================================*/

import { http } from "api"
import { generateServerRoute } from "utils"
import type { SERVER_PATHS } from "shared"
import type { ApiResponse, ISupply } from "types"

type PATHS = keyof typeof SERVER_PATHS.SUPPLY

const generateRoute = (
    route: Exclude<PATHS, "ROOT">,
    id?: string
) => generateServerRoute("SUPPLY", route, id)

class SupplyService {
    allSupplys(): ApiResponse<Array<ISupply>> {
        return http.get(generateRoute("ALL_SUPPLIES"))
    }

    getSupply(id: string): ApiResponse<ISupply> {
        return http.get(generateRoute("GET_SUPPLY", id))
    }
}

export const supplyService = new SupplyService()
