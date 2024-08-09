"use client"
import { useState } from "react"
import { HamburgerIcon } from "../Icons/Icons"
import Link from "next/link";
import headshot from "../../../public/headshot.png";
import Image from 'next/image';

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex flex-col fixed top-0 w-full z-20 shadow-sm">
            <div className="h-16 bg-zinc-50 bg-opacity-55 backdrop-blur-md flex justify-between px-10">
                <div className="flex items-center space-x-3 min-w-fit">
                    <div className="bg-sky-600 rounded-full size-12 overflow-hidden">
                        <Image
                            src={headshot}
                            alt=""
                            height={0}
                            width={0}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                    <Link
                        className="font-bold text-l hover:text-sky-600 cursor-pointer"
                        href="/"
                    >
                        MATT HWANG
                    </Link>
                </div>

                <div className="sm:flex items-center space-x-10 hidden">
                    <span className="text-l hover:text-sky-600 cursor-pointer">HOME</span>
                    <span className="text-l hover:text-sky-600 cursor-pointer">ABOUT</span>
                    <span className="text-l hover:text-sky-600 cursor-pointer">PROJECTS</span>
                    <Link className="text-l hover:text-sky-600 cursor-pointer" href={"/resume"}>RESUME</Link>
                    <span className="text-l hover:text-sky-600 cursor-pointer">CONTACT</span>
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