"use client"
import { useState } from "react"
import { HamburgerIcon } from "../Icons/Icons"

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col fixed top-0 w-full z-20 shadow-sm">
            <div className="h-24 bg-zinc-50 bg-opacity-55 backdrop-blur-md flex justify-between px-10">
                <div className="flex items-center space-x-3">
                    <div className="bg-sky-600 rounded-full size-12"></div>
                    <span className="font-bold text-xl hover:text-sky-600 cursor-pointer">MATT HWANG</span>
                </div>

                <div className="sm:flex items-center space-x-10 hidden">
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">HOME</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">ABOUT</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">PROJECTS</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">RESUME</span>
                    <span className="font-bold text-l hover:text-sky-600 cursor-pointer">CONTACT</span>
                </div>
                <div className="sm:hidden flex items-center cursor-pointer" onClick={() => { setMenuOpen(!menuOpen) }}>
                    {menuOpen ? "X" : <HamburgerIcon size="md" />}
                </div>
            </div>
            {menuOpen &&
                <div className="w-full flex flex-col bg-zinc-50 bg-opacity-55 backdrop-blur-md border-t border-black">
                    <div className="p-3 border-b border-black">HOME</div>
                    <div className="p-3 border-b border-black">ABOUT</div>
                </div>
            }

        </div>)
}

export default NavBar