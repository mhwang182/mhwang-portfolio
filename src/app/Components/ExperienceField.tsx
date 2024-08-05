const ExperienceField = (props: { institution: string, details: string }) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="size-16 rounded-md bg-red-900"></div>
            <div className="flex flex-col">
                <span className="font-semibold text-xl">{props.institution}</span>
                <span>{props.details}</span>
            </div>
        </div>
    )
}

export default ExperienceField