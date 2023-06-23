"use client"

import Avatar from "./Avatar"
import DarkModeToggler from "./DarkModeToggler"
import Logo from "./Logo"

const Navbar = () => {
    return (
        <nav className="z-40 bg-deepBlue flex items-center lg:flex-col lg:h-screen">
            <Logo />
            <DarkModeToggler />
            <Avatar />
        </nav>
    )
}

export default Navbar