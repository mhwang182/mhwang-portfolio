import Link from "next/link"

const Footer = () => {
    return (<div className="
        w-full h-fit
        bg-zinc-100
        p-4 pt-10
    ">
        <div className="flex justify-between max-w-[1100px] mx-auto">
            <span className="font-bold text-2xl">MATT HWANG</span>
            <div className="flex flex-col">
                <span className="font-bold text-2xl mb-2">SOCIALS</span>
                <Link href={"https://www.linkedin.com/in/matthew-hwang-26819a127"} rel="noopener noreferrer" target="_blank">LinkedIn</Link>
                <Link href={"https://github.com/mhwang182"} rel="noopener noreferrer" target="_blank">GitHub</Link>
            </div>
        </div>
        <br />
        <div className="w-full text-center">@Copyright 2024. Made by Matt Hwang</div>
    </div>)
}

export default Footer