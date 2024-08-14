import { ReactElement } from "react"

const SectionContainer = (props: { children: ReactElement }) => {
    return (
        <div className="w-full h-[900px]">
            {props.children}
        </div>
    )
}

export default SectionContainer