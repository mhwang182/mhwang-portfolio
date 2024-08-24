import { ReactElement } from "react"
import BodySectionContainer from "../Layout/BodySectionContainter"
import { MongoDBIcon, PythonIcon, ReactIcon } from "../../Icons/Icons"
import OzempicResultsImage from "../../../../public/OzempicResultsImage.png";
import WorkInProgressImage from "../../../../public/WorkInProgressImage.jpeg";
import PortfolioSiteImage from "../../../../public/PortfolioSiteImage.png";
import Image, { StaticImageData } from 'next/image'
import CommonButton from "../CommonButton";

const ProjectSection = () => {

    const PillIcon = (props: { name: string, icon?: ReactElement }) => {
        return (
            <div className="px-4 py-2 bg-gray-200 font-semibold rounded-full text-gray-500 flex space-x-2 items-center shadow-sm">
                {props.icon}
                <span>{props.name}</span>
            </div>
        )
    }

    const ProjectDescription = (props: {
        name: string,
        image: StaticImageData,
        toolsList: { name: string, icon?: ReactElement }[],
        description: string,
        repoLink?: string,
        demoLink?: string
    }) => {
        return (
            <div className="flex gap-10 md:flex-row flex-col w-full">
                <div className="md:w-96 h-fit border border-gray-300 shadow-lg rounded-md overflow-hidden">
                    <Image
                        src={props.image}
                        alt={""}
                        height={0}
                        width={0}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="flex flex-col space-y-4 items-center md:items-start w-full md:max-w-96">
                    <span className="text-3xl font-bold">{props.name}</span>
                    <div>
                        {props.toolsList.length > 0 && <>
                            <div className="flex gap-2">
                                {props.toolsList.map((toolInfo, index) => {
                                    return <PillIcon key={index} name={toolInfo.name} icon={toolInfo.icon} />
                                })}
                            </div>
                        </>}
                    </div>
                    <span>{props.description}</span>
                    <div className="flex space-x-2">
                        {props.demoLink && <CommonButton small text="Demo" />}
                        {props.repoLink && <CommonButton small text="Github Link" />}
                    </div>
                </div>
            </div>
        )
    }

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
                        repoLink="test"
                        demoLink="test"
                    />
                    <Divider />
                    <ProjectDescription
                        name={"Portfolio Website"}
                        image={PortfolioSiteImage}
                        toolsList={[
                            { name: "React", icon: <ReactIcon /> }
                        ]}
                        description={DESCRIPTION_2}
                        repoLink="test"
                        demoLink="test"
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