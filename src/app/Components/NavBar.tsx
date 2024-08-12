"use client"
import { useState } from "react"
import { HamburgerIcon, XMarkIcon } from "../Icons/Icons"
import Link from "next/link";
import headshot from "../../../public/headshot.png";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    const onLinkClick = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (!element) {
            router.push(`/#${elementId}`);
            return;
        }
        element.scrollIntoView({
            behavior: "smooth"
        })
    }

    const WideNavLink = (props: { text: string, elementId: string }) => {
        return <span
            className="text-l hover:text-sky-700 cursor-pointer"
            onClick={() => { onLinkClick(props.elementId) }}
        >
            {props.text}
        </span>
    }

    const MobileNavLink = (props: { text: string, elementId: string }) => {
        return <div
            className="p-3 border-t border-black cursor-pointer hover:text-sky-700"
            onClick={() => {
                onLinkClick(props.elementId)
            }}
        >
            {props.text}
        </div>
    }

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
                        className="font-bold text-l hover:text-sky-700 cursor-pointer"
                        href="/"
                    >
                        MATT HWANG
                    </Link>
                </div>

                <div className="md:flex items-center space-x-8 hidden">
                    <Link className="text-l hover:text-sky-700 cursor-pointer" href={"/"}>HOME</Link>
                    <WideNavLink text="ABOUT" elementId="About" />
                    <WideNavLink text="PROJECTS" elementId="Projects" />
                    <Link className="text-l hover:text-sky-700 cursor-pointer" href={"/resume"}>RESUME</Link>
                    <WideNavLink text="CONTACT" elementId="Contact" />
                </div>
                <div className="md:hidden flex items-center cursor-pointer" onClick={() => { setMenuOpen(!menuOpen) }}>
                    {menuOpen ?
                        <div className={`transition-opacity ease-in-out ${menuOpen ? "opacity-100" : "opacity-0"}`}>
                            <XMarkIcon />
                        </div> :
                        <HamburgerIcon size="md" />}
                </div>
            </div>
            {menuOpen &&
                <div className="
                    w-full flex flex-col 
                    bg-zinc-50 bg-opacity-55 backdrop-blur-md border-black 
                    drop-shadow-xl
                    md:hidden
                ">
                    <MobileNavLink text="ABOUT" elementId="About" />
                    <MobileNavLink text="PROJECTS" elementId="Projects" />
                    <Link className="p-3 border-t border-black cursor-pointer hover:text-sky-700" href={"/resume"}>RESUME</Link>
                    <MobileNavLink text="CONTACT" elementId="Contact" />
                </div>
            }

        </div>)
}

export default NavBar