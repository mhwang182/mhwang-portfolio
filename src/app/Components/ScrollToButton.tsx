"use client"
import CommonButton from "./CommonButton";

const ContactButton = (props: { text: string, elementId: string }) => {
    return <CommonButton text={props.text} small onClick={() => {
        const contactSection = document.getElementById(props.elementId);

        contactSection?.scrollIntoView({
            behavior: "smooth"
        });
    }} />
}

export default ContactButton