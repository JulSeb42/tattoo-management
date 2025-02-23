/*=============================================== HeaderAvatar ===============================================*/

import { Avatar, getInitials } from "@julseb-lib/react"
import { useAuthContext } from "context"

export const HeaderAvatar = () => {
    const { user } = useAuthContext()

    if (!user) return null

    if (user.avatar) return <Avatar img={user.avatar} />

    return (
        <Avatar
            letter={getInitials(user.fullName)}
            backgroundColor="primary-50"
            contentColor="primary"
        />
    )
}
