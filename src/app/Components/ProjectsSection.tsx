import { ReactElement } from "react"
import BodySectionContainer from "./BodySectionContainter"
import SectionTitle from "./SectionTitle"
import { MongoDBIcon, PythonIcon, ReactIcon } from "../Icons/Icons"
import OzempicResultsImage from "../../../public/OzempicResultsImage.png";
import Image from 'next/image'

const ProjectSection = () => {

    const PillIcon = (props: { name: string, icon?: ReactElement }) => {
        return (
            <div className="px-4 py-2 bg-gray-200 font-semibold rounded-full text-gray-500 flex space-x-2 items-center shadow-sm">
                {props.icon}
                <span>{props.name}</span>
            </div>
        )
    }

    const ProjectButton = (props: { text: string }) => {
        return (
            <button className="px-5 py-2 bg-sky-600 rounded-md text-white font-semibold text-md shadow-md">
                {props.text}
            </button>
        )
    }

    const ProjectDescription = (props: {
        name: string,
        toolsList: { name: string, icon?: ReactElement }[],
        description: string,
    }) => {
        return (
            <div className="flex gap-10 md:flex-row flex-col">
                <div className="w-full md:max-w-96 h-fit">
                    <Image
                        src={OzempicResultsImage}
                        alt={""}
                        height={0}
                        width={0}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="flex flex-col md:max-w-96 space-y-4 items-center md:items-start">
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
                        <ProjectButton text="Demo" />
                        <ProjectButton text="Github Link" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <BodySectionContainer>
            <div className="size-full flex flex-col space-y-10 py-10 px-4 items-center">
                <SectionTitle title="Projects" />
                <ProjectDescription
                    name={"OzempicResults.com"}
                    toolsList={[
                        { name: "React", icon: <ReactIcon /> },
                        { name: "Flask", icon: <PythonIcon /> },
                        { name: "MongoDB", icon: <MongoDBIcon /> }
                    ]}
                    description="OzempicResults.com is a Fullstack web app built using React and Flask, that users can
                        find weighloss results achieved using medications like Ozempic."
                />
                <ProjectDescription
                    name={"OzempicResults.com"}
                    toolsList={[]}
                    description="OzempicResults.com is a Fullstack web app built using React and Flask, that users can
                        find weighloss results achieved using medications like Ozempic."
                />
            </div>
        </BodySectionContainer>
    )
}

export default ProjectSection