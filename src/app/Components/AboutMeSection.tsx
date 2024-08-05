import BodySection from "./BodySectionContainter"
import ExperienceField from "./ExperienceField"
import SectionTitle from "./SectionTitle"

const AboutMeSection = () => {

    const ExperienceSection = () => {
        return (
            <div className="flex flex-col justify-center max-w-96 min-w-96 space-y-4">
                <div className="flex flex-col space-y-3 border border-gray-300 rounded-lg shadow-md p-4">
                    <span className="font-bold text-2xl">Education: </span>
                    <ExperienceField institution="Virginia Tech" details="Bachelors in Computer Science" />
                </div>
                <div className="flex flex-col space-y-3 border border-gray-300 rounded-lg shadow-md p-4">
                    <span className="font-bold text-2xl">Work Experience: </span>
                    <ExperienceField institution="Fundrise" details="Software Engineer II (Dec 2021 - Aug 2023)" />
                    <ExperienceField institution="Costar Group" details="Software Engineer (Aug 2020 - Dec 2021)" />
                </div>
            </div>
        )
    }

    const SkillsSection = () => {
        return (
            <div className="min-w-96 max-w-96 border border-gray-300 rounded-lg shadow-md p-4">
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
            <div className="size-full flex flex-col items-center px-3 bg-zinc-50 p-3">
                <SectionTitle
                    title="About Me"
                    description="Get to know me! Here is a little about my background and what skills I have to offer"
                />
                <div className="flex w-full flex-wrap gap-y-4 gap-x-4 justify-center">
                    <ExperienceSection />
                    <SkillsSection />
                </div>

            </div>
        </BodySection>
    )
}

export default AboutMeSection