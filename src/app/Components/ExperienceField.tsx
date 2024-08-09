import Image, { StaticImageData } from "next/image";

const ExperienceField = (props: {
    institution: string,
    details: string,
    image: StaticImageData
}) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="
                size-16 rounded-md min-w-16 overflow-hidden
                border border-gray-300 shaddow-md
                ">
                <Image
                    src={props.image}
                    alt={""}
                    height={0}
                    width={0}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-xl">{props.institution}</span>
                <span>{props.details}</span>
            </div>
        </div>
    )
}

export default ExperienceField