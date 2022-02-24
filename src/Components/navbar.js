import React from 'react'
import { BiWorld } from 'react-icons/bi'

export const Navbar = () => {
    return (
        <nav className="navbar text-center">
            <BiWorld size={60} /> <span className="navbar-text">
                My travel journal
            </span>
        </nav>
    )
}
