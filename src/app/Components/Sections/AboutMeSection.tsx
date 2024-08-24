import Link from "next/link"
import BodySection from "../Layout/BodySectionContainter"
import CommonButton from "../CommonButton"
import ExperienceField from "../ExperienceField"
import VTLogo from "../../../../public/VTLogo.png";
import FundriseLogo from "../../../../public/FundriseLogo.png";
import CostarLogo from "../../../../public/CostarLogo.png";
import ScrollToButton from "../ScrollToButton";

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
        <BodySection elementId="About">
            <div className="
                size-full flex flex-col items-center space-y-10 bg-zinc-50 
                py-10 px-4
                ">
                <div className="flex flex-col space-y-8 mx-auto max-w-[1000px]">
                    <span className="text-5xl font-bold">{"About Me"}</span>
                    <span className="text-lg">
                        I'm a dedicated and Full Stack Developer with a Bachelor’s degree in Computer Science from Virginia Tech and extensive experience in the IT industry.
                        I have experience in a wide range of programming languages and programming tools,
                        with a passion for developing high quality software and solving the problems that lead to the success of any project.
                    </span>
                    <span className="text-lg">
                        I'm a Virginia native from the surrounding Washington, DC area, but have also spent some time residing in NYC.
                        I love traveling the world and getting to experience new places and making meaningful connections.
                        Helping others is important to me whether thats getting involved in volunteering or helping a friend in need.
                    </span>
                    <span className="text-lg">
                        I'm looking for my next opportunity, feel free to reach out if you know about any open positions!
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