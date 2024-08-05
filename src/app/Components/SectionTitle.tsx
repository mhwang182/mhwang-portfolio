const SectionTitle = (props: { title: string, description?: string }) => {
    return (
        <div className="h-fit flex flex-col justify-center space-y-3">
            <span className="text-5xl font-bold text-center underline decoration-sky-600">{props.title}</span>
            {props.description && <span>{props.description}</span>}
        </div>
    )
}

export default SectionTitle