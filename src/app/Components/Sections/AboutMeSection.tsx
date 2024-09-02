import BodySection from "../Layout/BodySectionContainter"
import ExperienceSection from "../Content/ExperienceSection";
import SkillsSection from "../Content/SkillsSection";
import BioSection from "../Content/BioSection";

const AboutMeSection = () => {

    return (
        <BodySection elementId="About">
            <div className="
                size-full flex flex-col items-center space-y-10 bg-zinc-50 
                py-10 px-4
                ">
                <BioSection />
                <div className="w-full max-w-[800px] rounded-full h-1 bg-gradient-to-r from-blue-700 to-cyan-400" />
                <div className="w-full max-w-[1000px] flex flex-col items-center">
                    <span className="text-xl font-semibold w-full">My Background:</span>
                    <div className="flex w-full flex-wrap gap-y-4 gap-x-4 justify-center mt-5 max-w-[500px] md:max-w-full">
                        <SkillsSection />
                        <ExperienceSection />
                    </div>
                </div>


            </div>
        </BodySection>
    )
}

export default AboutMeSection