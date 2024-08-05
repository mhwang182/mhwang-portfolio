import { ReactElement } from "react"

const BodySectionContainer = (props: { children: ReactElement }) => {
    return (
        <div className="w-full h-fit">
            {props.children}
        </div>
    )
}

export default BodySectionContainer