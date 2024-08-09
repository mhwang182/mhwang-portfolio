import { GithubIcon } from "../Icons/Icons"
import CommonButton from "./CommonButton"
import SectionContainer from "./SectionContainer"

const HeroSection = () => {

    const OriginalContent = () => {
        return (
            <>
                <span className="text-white text-7xl font-bold text-center">HEY, I'M MATT HWANG!</span>
                <span className="text-white text-xl max-w-[600px] text-center">
                    A Result-Oriented Web Developer building and managing Websites and
                    Web Applications that leads to the success of the overall product
                </span>
                <div className="flex space-x-5">
                    <CommonButton text="Projects" />
                    <CommonButton text="Github" icon={GithubIcon()} />
                </div>
            </>
        )
    }
    return (
        <SectionContainer>
            <div className="
                bg-[url('../../public/cityBackground.jpeg')] 
                size-full flex flex-col justify-center
                px-10 space-y-5">
                <div className="flex flex-col">
                    <span className="text-gray-400 text-7xl font-extrabold">HEY, IM</span>
                    <span className="
                        w-fit
                        text-7xl font-extrabold
                        bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-transparent
                    ">MATT HWANG!</span>
                </div>
                <span className="
                    max-w-[500px]
                    text-gray-300 text-xl
                ">
                    A Result-Oriented Web Developer building and managing Websites and
                    Web Applications that leads to the success of the overall product
                </span>
                <div className="flex space-x-5">
                    <button className="
                        text-white font-semibold text-l
                        px-10 py-3 rounded-full shadow-md
                        bg-gradient-to-r from-indigo-700 to-cyan-400
                        hover:brightness-90
                    ">
                        Projects
                    </button>
                    <button className="
                        text-white font-semibold text-l
                        px-10 py-3 rounded-full shadow-md
                        bg-gradient-to-r from-indigo-700 to-cyan-400
                        hover:brightness-90
                    ">
                        <span>Github</span>
                    </button>
                </div>
            </div>
        </SectionContainer>
    )
}

export default HeroSection