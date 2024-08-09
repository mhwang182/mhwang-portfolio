import "react-photo-album/rows.css";
import Gallery from "./Gallery";

const GalleryPage = async () => {

    return (
        <div className="
            size-full min-h-screen
            pattern-isometric pattern-gray-200 pattern-bg-white pattern-size-10 pattern-opacity-100
            pt-20
        ">
            <div className="max-w-[1000px] mx-auto px-8">
                <Gallery />
            </div>
        </div>
    )
}

export default GalleryPage