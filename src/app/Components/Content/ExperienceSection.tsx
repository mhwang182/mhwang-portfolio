import ExperienceField from "../ExperienceField"
import VTLogo from "../../../../public/VTLogo.png";
import FundriseLogo from "../../../../public/FundriseLogo.png";
import CostarLogo from "../../../../public/CostarLogo.png";

const ExperienceSection = () => {
    return (
        <div className="flex flex-col justify-center md:max-w-96 w-full space-y-4">
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

export default ExperienceSection