"use client"

import { useForm } from "react-hook-form"
import CommonButton from "./CommonButton"
import { SendEmail } from "../Utils/SendEmail"
import { useState } from "react"

const ContactForm = () => {

    const [message, setMessage] = useState("");

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })


    const handleSuccess = (success: boolean) => {
        if (!success) {
            setMessage("Unable to Send Message. Please Email mhwang.dev@gmail.com!");
            return;
        }
        setMessage("Message Sent Successfully!");
    }

    return (
        <div className="
            w-full max-w-[550px] h-fit p-5
            bg-white rounded-md border border-gray-300 shadow-lg
            flex flex-col space-y-4
        ">
            <span className="font-bold text-xl text-blue-700">{message}</span>
            <form
                onSubmit={handleSubmit((data) => {
                    console.log(data)
                    SendEmail(data, handleSuccess);
                })}
                className="flex flex-col space-y-4"
            >
                <div className="flex flex-col space-y-1">
                    <span>Name: </span>
                    <input type="text" className="form-input px-4 py-2 rounded-md" placeholder="Enter Your Name" {...register("name", { required: true })} />
                </div>
                <div className="flex flex-col space-y-1">
                    <span>Email: </span>
                    <input type="email" className="form-input px-4 py-2 rounded-md" placeholder="Enter Your Email" {...register("email", { required: true })} />
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
                        {...register("message", { required: true })}
                    ></textarea>
                </div>
                <div className="w-fit">
                    <CommonButton small text="Submit" />
                </div>
            </form>
        </div>)
}

export default ContactForm