/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLinkExtended, INavLinkAdmin } from "types"

export const navLinks: Array<INavLinkExtended> = [
    { text: "Home", to: PATHS.ROOT, type: "protected", role: "user" },
    { text: "Supplies", to: PATHS.SUPPLIES, type: "protected", role: "user" },
    { text: "Calendar", to: PATHS.CALENDAR, type: "protected", role: "user" },
]

export const adminNavLinks: Array<INavLinkAdmin> = [
    { text: "Home", to: PATHS.ADMIN_HOME, icon: "home", end: true },
    { text: "Users", to: PATHS.ADMIN_USERS, icon: "user" },
]

export const adminBottomLinks: Array<INavLinkAdmin> = [
    { text: "Back to app", to: PATHS.ROOT, icon: "link-external", blank: true },
]
