import Image from 'next/image'
import GalleryImage3 from "../../../../public/GalleryImage3.jpg"
import headshot from "../../../../public/headshot.jpeg"
import StepsImage from "../../../../public/StepsImage.jpg"


const HeroCollage = () => {
    return (
        <div className="relative w-[450px] md:w-[550px] h-[500px]">
            <div className="absolute">
                <div className="w-80 h-56 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={GalleryImage3} alt=""
                        height={0}
                        width={0}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
            <div className="absolute top-36 left-64">
                <div className="size-52 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={headshot} alt=""
                        height={0}
                        width={0}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
            <div className="absolute top-72 left-20">
                <div className="h-68 w-52 rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src={StepsImage} alt=""
                        height={0}
                        width={0}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroCollage