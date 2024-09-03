import Link from "next/link"
import CommonButton from "../CommonButton"
import ScrollToButton from "../ScrollToButton"

const BioSection = () => {
    return (
        <div className="flex flex-col space-y-8 mx-auto max-w-[1000px]">
            <span className="text-5xl font-bold">{"About Me"}</span>
            <span className="text-lg">
                I&apos;m a dedicated and Full Stack Developer with a Bachelor&apos;s degree in Computer Science from Virginia Tech and extensive experience in the IT industry.
                I have experience in a wide range of programming languages and development tools,
                with a passion for developing high quality software and solving problems that lead to the success of any project.
            </span>
            <span className="text-lg">
                I have experience in Agile and Scrum development environments and a desire to learn new skills and take initiative on
                exciting challenges.
            </span>
            <span className="text-lg">
                I&apos;m a Virginia native from the surrounding Washington DC area, but have also spent some time residing in NYC!
                I love traveling the world and getting to experience new places and making meaningful connections.
            </span>
            <span className="text-lg">
                I&apos;m looking for my next opportunity, feel free to reach out if you know about any open positions!
            </span>
            <div className="w-fit space-x-3">
                <ScrollToButton text="Contact" elementId="Contact" />
                <Link href={"/gallery"}><CommonButton text="Check out my life :)" small /></Link>
            </div>
        </div>
    )
}

export default BioSection