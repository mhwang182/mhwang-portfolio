import Image from "next/image";
import headshot from "../../../public/headshot.jpg";

const HeroImageContainer = () => {
    return (
        <div>
            {/* image section */}
            <div className="size-52 rounded-lg overflow-hidden">
                <Image
                    src={headshot} alt=""
                    height={0}
                    width={0}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            {/* caption container */}
            <div>

            </div>
        </div>
    )
}

export default HeroImageContainer