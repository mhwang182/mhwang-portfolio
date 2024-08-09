
const ResumePage = () => {
    return (
        <div className="
            size-full 
            pattern-isometric pattern-gray-200 pattern-bg-white pattern-size-10 pattern-opacity-100 
            px-4">
            <div className="
                w-full max-w-[1000px] mx-auto pt-32
                sm:aspect-[8/10] h-lvh sm:h-auto
            ">
                <iframe src={"/resume.pdf"} width={"100%"} height={"100%"} />
            </div>
        </div>
    )
}

export default ResumePage