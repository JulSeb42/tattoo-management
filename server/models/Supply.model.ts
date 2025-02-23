/*=============================================== Supply model ===============================================*/

import { Schema, model } from "mongoose"
import type { ISupply } from "../../shared/types"

const supplySchema = new Schema<ISupply>(
    {
        
    },
    { timestamps: true }
)

export const SupplyModel = model<ISupply>("Supply", supplySchema)
