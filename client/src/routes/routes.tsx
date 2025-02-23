/*=============================================== Routes ===============================================*/

// import { Navigate } from "react-router-dom"
import { PATHS } from "routes"
import { Homepage } from "pages/Homepage"
import { NotFound } from "pages/NotFound"
import {
    Login,
    ForgotPassword,
    ForgotSent,
    ResetPassword,
    Goodbye,
} from "pages/auth"
import { MyAccount, EditAccount, EditPassword } from "pages/account"
import { Admin } from "pages/admin/Admin"
import { Users } from "pages/admin/Users/AdminUsers"
import { Supplies } from "pages/Supplies"
import { Calendar } from "pages/Calendar"
/* Prepend import - DO NOT REMOVE */

type Route = {
    path: string
    element: JSX.Element
    type: "none" | "protected" | "anon" | "admin"
}

const redirects: Array<Route> = [
    // {
    //     path: "",
    //     element: <Navigate to="" />,
    // },
]

export const routes: Array<Route> = [
    { path: PATHS.ROOT, element: <Homepage />, type: "protected" },
    { path: "*", element: <NotFound />, type: "none" },

    // { path: PATHS.USERS, element: <AllUsers />, type: "none" },
    // { path: PATHS.USER(), element: <PublicProfile />, type: "none" },

    { path: PATHS.LOGIN, element: <Login />, type: "anon" },
    { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword />, type: "anon" },
    { path: PATHS.FORGOT_PASSWORD_SENT, element: <ForgotSent />, type: "anon" },
    { path: PATHS.RESET_PASSWORD, element: <ResetPassword />, type: "anon" },
    { path: PATHS.GOODBYE, element: <Goodbye />, type: "anon" },

    { path: PATHS.MY_ACCOUNT, element: <MyAccount />, type: "protected" },
    { path: PATHS.EDIT_ACCOUNT, element: <EditAccount />, type: "protected" },
    { path: PATHS.EDIT_PASSWORD, element: <EditPassword />, type: "protected" },

    { path: PATHS.ADMIN_HOME, element: <Admin />, type: "admin" },
    { path: PATHS.ADMIN_USERS, element: <Users />, type: "admin" },
    
    { path: PATHS.SUPPLIES, element: <Supplies />, type: "protected" },
    { path: PATHS.CALENDAR, element: <Calendar />, type: "protected" },
    /* Prepend route - DO NOT REMOVE */

    ...redirects,
]
