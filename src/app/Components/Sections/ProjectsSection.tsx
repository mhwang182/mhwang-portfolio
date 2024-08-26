import BodySectionContainer from "../Layout/BodySectionContainter"
import { MongoDBIcon, PythonIcon, ReactIcon } from "../../Icons/Icons"
import OzempicResultsImage from "../../../../public/OzempicResultsImage.png";
import WorkInProgressImage from "../../../../public/WorkInProgressImage.jpeg";
import PortfolioSiteImage from "../../../../public/PortfolioSiteImage.png";
import ProjectDescription from "../Content/ProjectDescription";

const ProjectSection = () => {

    const Divider = () => {
        return <div className="w-32 rounded-full h-1 bg-gradient-to-r from-blue-700 to-cyan-400" />
    }

    const DESCRIPTION_1 = `OzempicResults.com is a Fullstack web app built using React and Flask with MongoDB, 
    enabling multiple users to share and view image posts showcasing their progress with weight loss medications like Ozempic.`

    const DESCRIPTION_2 = `My humble portfolio website :)`;

    const DESCRIPTOIN_3 = `App focused on helping aws learners and professionals obtain clarity for their goals`;

    return (
        <BodySectionContainer elementId="Projects">
            <div className="size-full flex flex-col space-y-10 py-10 px-4 items-center">
                <span className="text-5xl font-bold">Projects</span>
                <div className="flex flex-col space-y-10 items-center">
                    <ProjectDescription
                        name={"OzempicResults.com"}
                        image={OzempicResultsImage}
                        toolsList={[
                            { name: "React", icon: <ReactIcon /> },
                            { name: "Flask", icon: <PythonIcon /> },
                            { name: "MongoDB", icon: <MongoDBIcon /> }
                        ]}
                        description={DESCRIPTION_1}
                        repoLink="https://github.com/mhwang182/ozempic-results-api"
                        demoLink="https://www.ozempicresults.com"
                    />
                    <Divider />
                    <ProjectDescription
                        name={"Portfolio Website"}
                        image={PortfolioSiteImage}
                        toolsList={[
                            { name: "React", icon: <ReactIcon /> },
                            { name: "Next.js" }
                        ]}
                        description={DESCRIPTION_2}
                        repoLink="https://github.com/mhwang182/mhwang-portfolio"
                    />
                    <Divider />
                    <ProjectDescription
                        name={"AWS Focused Application (WIP)"}
                        image={WorkInProgressImage}
                        toolsList={[]}
                        description={DESCRIPTOIN_3}
                    />
                    <Divider />
                </div>
            </div>
        </BodySectionContainer>
    )
}

export default ProjectSection