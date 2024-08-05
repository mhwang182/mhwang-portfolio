import { GithubIcon } from "../Icons/Icons"
import SectionContainer from "./SectionContainer"

const HeroSection = () => {

    const HeroButton = (props: { text: string, icon?: JSX.Element }) => {
        return (
            <button className="text-2xl bg-sky-600 rounded-sm px-12 py-3 text-white font-semibold shadow-sm">
                <div className="flex items-center space-x-2">
                    <span>{props.icon}</span>
                    <span>{props.text}</span>
                </div>
            </button>
        )
    }
    return (
        <SectionContainer>
            <div className="size-full bg-[url('../../public/cityBackground.jpeg')] flex flex-col justify-center items-center space-y-10 px-3">
                <span className="text-white text-7xl font-bold text-center">HEY, I'M MATT HWANG!</span>
                <span className="text-white text-xl max-w-[600px] text-center">
                    A Result-Oriented Web Developer building and managing Websites and
                    Web Applications that leads to the success of the overall product
                </span>
                <div className="flex space-x-5">
                    <HeroButton text="Projects" />
                    <HeroButton text="Github" icon={GithubIcon()} />
                </div>
            </div>
        </SectionContainer>
    )
}

export default HeroSection