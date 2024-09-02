import Image, { StaticImageData } from 'next/image'
import { ReactElement } from "react"
import CommonButton from "../CommonButton"
import Link from 'next/link'

const ProjectDescription = (props: {
    name: string,
    image: StaticImageData,
    toolsList: { name: string, icon?: ReactElement }[],
    description: string,
    repoLink?: string,
    demoLink?: string
}) => {

    const PillIcon = (props: { name: string, icon?: ReactElement }) => {
        return (
            <div className="px-4 py-2 bg-gray-200 font-semibold rounded-full text-gray-500 flex space-x-2 items-center shadow-sm">
                {props.icon}
                <span>{props.name}</span>
            </div>
        )
    }

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
                <span className="">{props.description}</span>
                <div className="flex space-x-2">
                    {props.demoLink &&
                        <Link href={props.demoLink} rel="noopener noreferrer" target="_blank">
                            <CommonButton small text="Demo" />
                        </Link>
                    }
                    {props.repoLink &&
                        <Link href={props.repoLink} rel="noopener noreferrer" target="_blank">
                            <CommonButton small text="Github Link" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectDescription