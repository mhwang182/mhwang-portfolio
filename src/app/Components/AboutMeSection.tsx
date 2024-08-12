import Link from "next/link"
import BodySection from "./BodySectionContainter"
import CommonButton from "./CommonButton"
import ExperienceField from "./ExperienceField"
import VTLogo from "../../../public/VTLogo.png";
import FundriseLogo from "../../../public/FundriseLogo.png";
import CostarLogo from "../../../public/CostarLogo.png";
import ScrollToButton from "../Components/ScrollToButton";

const AboutMeSection = () => {

    const ExperienceSection = () => {
        return (
            <div className="flex flex-col justify-center sm:max-w-96 w-full space-y-4">
                <div className="flex flex-col space-y-3 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
                    <span className="font-bold text-2xl">Education: </span>
                    <ExperienceField
                        institution="Virginia Tech"
                        details="Bachelors in Computer Science"
                        image={VTLogo}
                    />
                </div>
                <div className="flex flex-col space-y-3 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
                    <span className="font-bold text-2xl">Work Experience: </span>
                    <ExperienceField
                        institution="Fundrise"
                        details="Software Engineer II (Dec 2021 - Aug 2023)"
                        image={FundriseLogo}
                    />
                    <ExperienceField
                        institution="Costar Group"
                        details="Software Engineer (Aug 2020 - Dec 2021)"
                        image={CostarLogo}
                    />
                </div>
            </div>
        )
    }

    const SkillsSection = () => {
        return (
            <div className="w-full sm:max-w-96 border border-gray-300 rounded-lg shadow-md p-4 bg-white">
                <span className="font-bold text-2xl">Skills:</span>
                <div className="flex flex-wrap gap-y-2 gap-x-2">
                    <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">HTML</div>
                    <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">Javascript</div>
                    <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">Typescript</div>
                    <div className="px-4 py-2 bg-gray-200 font-semibold rounded-sm text-gray-500">SpringBoot</div>
                </div>
            </div>
        )
    }

    return (
        <BodySection>
            <div id="About" className="
                size-full flex flex-col items-center space-y-10 bg-zinc-50 
                py-10 px-4
                ">
                <div className="flex flex-col space-y-8 mx-auto max-w-[1000px]">
                    <span className="text-5xl font-bold">{"About Me"}</span>
                    <span className="text-lg">
                        I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
                        I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming
                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </span>
                    <div className="w-fit space-x-3">
                        <ScrollToButton text="Contact" elementId="Contact" />
                        <Link href={"/gallery"}><CommonButton text="Check out my life :)" small /></Link>
                    </div>
                </div>
                <div className="w-full max-w-[800px] rounded-full h-1 bg-gradient-to-r from-blue-700 to-cyan-400" />
                <div className="w-full max-w-[1000px]">
                    <span className="text-xl font-semibold">My Background:</span>
                    <div className="flex w-full flex-wrap gap-y-4 gap-x-4 justify-center mt-5">
                        <SkillsSection />
                        <ExperienceSection />
                    </div>
                </div>


            </div>
        </BodySection>
    )
}

export default AboutMeSection