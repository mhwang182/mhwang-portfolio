import BodySectionContainer from "../Layout/BodySectionContainter"
import CommonButton from "../CommonButton"
import ContactForm from "../ContactForm"

const ContactSection = () => {
    return (
        <BodySectionContainer elementId="Contact">
            <div className="size-full pattern-isometric pattern-gray-100 pattern-bg-white pattern-size-16 pattern-opacity-100 py-10 px-4">
                <div className="w-full max-w-[1000px] mx-auto bg-opacity-100 flex flex-col items-center space-y-10">
                    <span className="font-bold text-5xl">Contact Me!</span>
                    <ContactForm />
                </div>
            </div>
        </BodySectionContainer>
    )
}

export default ContactSection