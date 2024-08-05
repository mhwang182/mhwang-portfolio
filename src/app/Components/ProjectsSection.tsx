import BodySectionContainer from "./BodySectionContainter"
import SectionTitle from "./SectionTitle"

const ProjectSection = () => {

    const PillIcon = (props: { name: string }) => {
        return (
            <div className="px-4 py-2 bg-gray-200 font-semibold rounded-full text-gray-500">
                {props.name}
            </div>
        )
    }

    const ProjectButton = (props: { text: string }) => {
        return (
            <button className="px-6 py-2 bg-sky-600 rounded-sm text-white font-semibold text-xl">
                {props.text}
            </button>
        )
    }
    return (
        <BodySectionContainer>
            <div className="size-full p-3 flex flex-col space-y-4">
                <SectionTitle title="Projects" />
                <div className="flex flex-col items-center">
                    <div className="flex space-x-4">
                        <div className="size-56 bg-sky-600">

                        </div>
                        <div className="flex flex-col max-w-96 space-y-2">
                            <span className="text-3xl font-bold">OzempicResults.com</span>
                            <div>
                                <span>Built With:</span>
                                <div className="flex gap-2">
                                    <PillIcon name="React" />
                                    <PillIcon name="Flask" />
                                    <PillIcon name="MongoDB" />
                                </div>
                            </div>
                            <span>OzempicResults.com is a Fullstack web app built using React and Flask, that users can
                                find weighloss results achieved using medications like Ozempic.
                            </span>
                            <div className="flex space-x-2">
                                <ProjectButton text="Demo" />
                                <ProjectButton text="Github Link" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BodySectionContainer>
    )
}

export default ProjectSection