const CommonButton = (props: {
    text: string,
    onClick?: () => void,
    small?: boolean,
    icon?: JSX.Element
}) => {
    return (
        <button className={`
            ${props.small ? "text-md" : "text-2xl"} 
            rounded-full shadow-md hover:brightness-90
            bg-gradient-to-r from-blue-700 to-cyan-400
            ${props.small ? "px-5 py-2" : "px-12 py-3"}
            text-white font-semibold
        `}
            onClick={props.onClick}
        >
            <div className="flex items-center space-x-2">
                {props.icon && <span>{props.icon}</span>}
                <span>{props.text}</span>
            </div>
        </button>
    )
}

export default CommonButton