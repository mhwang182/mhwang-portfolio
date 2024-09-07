import ScrollToButton from "../ScrollToButton"
import SectionContainer from "../Layout/SectionContainer"
import Link from "next/link"
import HeroCollage from "../Content/HeroCollage"


const HeroSection = () => {

    const LeftSide = () => {
        return (
            <div className="flex flex-col space-y-5 ">
                <div className="flex flex-col">
                    <span className="text-gray-400 text-7xl font-extrabold">HEY, I&apos;M</span>
                    <span className="
                        w-fit
                        text-7xl font-extrabold
                        bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent
                    ">MATT HWANG!</span>
                </div>
                <span className="
                    max-w-[600px]
                    text-gray-200 text-xl font-semibold
                "
                    style={{ textShadow: "1px 1px 4px black" }}
                >
                    An experienced Software Engineer adept at using diverse tech stacks to build
                    effective solutions for any environment
                </span>
                <div className="flex space-x-5">
                    <ScrollToButton text="Projects" elementId="Projects" />

                    <Link href={"https://github.com/mhwang182"} rel="noopener noreferrer" target="_blank">
                        <button className="
                            text-white font-semibold text-l
                            px-10 py-3 rounded-full shadow-md
                            bg-gradient-to-r from-indigo-700 to-cyan-400
                            hover:brightness-90
                        ">
                            <span>Github</span>
                        </button>
                    </Link>
                </div>
                <div className="flex space-x-5">
                    <Link href={"https://www.linkedin.com/in/matthew-hwang-26819a127"} rel="noopener noreferrer" target="_blank">
                        <button className="
                            text-white font-semibold text-l
                            px-6 py-3 rounded-full shadow-md
                            bg-gradient-to-r from-indigo-700 to-cyan-400
                            hover:brightness-90
                        ">
                            <span>LinkedIn</span>
                        </button>
                    </Link>
                </div>
            </div>)
    }

    const RightSide = () => {
        return (
            <div className="
                hidden
                w-fit h-full 
                md:flex items-center
            ">
                <HeroCollage />
            </div>
        )
    }

    return (
        <SectionContainer>
            <div className="
                bg-[url('../../public/cityBackground.jpeg')] 
                size-full overflow-hidden
                px-10">
                <div className="
                    size-full max-w-[1600px] mx-auto
                    flex items-center justify-between space-x-12
                ">
                    <LeftSide />
                    <RightSide />
                </div>
            </div>
        </SectionContainer>
    )
}

export default HeroSection