/*=============================================== UserDropdown ===============================================*/

import { useState } from "react"
import { DropdownContainer, Dropdown, DropdownItem } from "@julseb-lib/react"
import { useAuthContext } from "context"
import { PATHS } from "routes"
import { HeaderAvatar } from "./HeaderAvatar"
import { StyledDropdownButton } from "./styles"

export const HeaderDropdown = () => {
    const { user, logoutUser } = useAuthContext()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <DropdownContainer isOpen={isOpen} justifyContent="flex-end">
                <StyledDropdownButton onClick={() => setIsOpen(!isOpen)}>
                    <HeaderAvatar />
                </StyledDropdownButton>

                <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
                    <DropdownItem to={PATHS.MY_ACCOUNT}>
                        My account
                    </DropdownItem>
                    {user?.role === "admin" && (
                        <DropdownItem to={PATHS.ADMIN_HOME}>Admin</DropdownItem>
                    )}
                    <DropdownItem onClick={logoutUser}>Log out</DropdownItem>
                </Dropdown>
            </DropdownContainer>
        </>
    )
}
