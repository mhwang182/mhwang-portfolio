const CommonButton = (props: { text: string, icon?: JSX.Element }) => {
    return (
        <button className="text-2xl bg-sky-600 rounded-sm px-12 py-3 text-white font-semibold shadow-md">
            <div className="flex items-center space-x-2">
                <span>{props.icon}</span>
                <span>{props.text}</span>
            </div>
        </button>
    )
}

export default CommonButton