/*=============================================== Header component ===============================================*/

import { Header as Container } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { SITE_DATA } from "shared"
import { Nav } from "./Nav"

export const Header = () => {
    const { isLoggedIn } = useAuthContext()

    if (!isLoggedIn) return null

    return (
        <Container logo={SITE_DATA.NAME} linkColor="background">
            <Nav />
        </Container>
    )
}
