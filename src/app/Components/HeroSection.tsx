import { GithubIcon } from "../Icons/Icons"
import CommonButton from "./CommonButton"
import SectionContainer from "./SectionContainer"

const HeroSection = () => {
    return (
        <SectionContainer>
            <div className="size-full bg-[url('../../public/cityBackground.jpeg')] flex flex-col justify-center items-center space-y-10 px-3">
                <span className="text-white text-7xl font-bold text-center">HEY, I'M MATT HWANG!</span>
                <span className="text-white text-xl max-w-[600px] text-center">
                    A Result-Oriented Web Developer building and managing Websites and
                    Web Applications that leads to the success of the overall product
                </span>
                <div className="flex space-x-5">
                    <CommonButton text="Projects" />
                    <CommonButton text="Github" icon={GithubIcon()} />
                </div>
            </div>
        </SectionContainer>
    )
}

export default HeroSection