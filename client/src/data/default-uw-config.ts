/*=============================================== Default UW config ===============================================*/

import { SITE_DATA } from "shared"

export const defaultUwConfig = {
    cloudName: import.meta.env.VITE_CLOUDINARY_NAME,
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    sources: ["local"],
    multiple: false,
    folder: SITE_DATA.NAME,
    clientAllowedFormats: ["jpg", "jpeg", "png", "svg"],
}
