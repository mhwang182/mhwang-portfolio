import BodySectionContainer from "./BodySectionContainter"
import CommonButton from "./CommonButton"

const ContactSection = () => {
    return (
        <BodySectionContainer>
            <div id="ContactSection" className="size-full pattern-isometric pattern-gray-100 pattern-bg-white pattern-size-16 pattern-opacity-100 py-10 px-4">
                <div className="w-full max-w-[1000px] mx-auto bg-opacity-100 flex flex-col items-center space-y-10">
                    <span className="font-bold text-5xl">Contact Me!</span>
                    <div className="
                        w-full max-w-[550px] h-fit p-5
                        bg-white rounded-md border border-gray-300 shadow-lg
                        flex flex-col space-y-4
                    ">
                        <div className="flex flex-col space-y-1">
                            <span>Name: </span>
                            <input type="text" className="form-input px-4 py-2 rounded-md" placeholder="Enter Your Name" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Email: </span>
                            <input type="email" className="form-input px-4 py-2 rounded-md" placeholder="Enter Your Email" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <span>Message: </span>
                            <textarea className="
                            form-input 
                            px-4 py-2 
                            rounded-md
                            min-h-32
                            "
                                placeholder="Enter Your Message"
                            ></textarea>
                        </div>
                        <div className="w-fit">
                            <CommonButton small text="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        </BodySectionContainer>
    )
}

export default ContactSection