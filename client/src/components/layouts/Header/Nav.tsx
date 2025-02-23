/*=============================================== Nav ===============================================*/

import { NavLink } from "react-router-dom"
import { navLinks } from "data"
import { HeaderDropdown } from "./HeaderDropdown"

export const Nav = () => {
    return (
        <>
            {navLinks.map((link, i) => (
                <NavLink to={link.to as any} key={i}>
                    {link.text}
                </NavLink>
            ))}

            <HeaderDropdown />
        </>
    )
}
