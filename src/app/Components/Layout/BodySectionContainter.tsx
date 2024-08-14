import { ReactElement } from "react"

const BodySectionContainer = (props: { children: ReactElement, elementId: string }) => {
    return (
        <div id={props.elementId} className="w-full h-fit scroll-mt-16">
            {props.children}
        </div>
    )
}

export default BodySectionContainer