"use client"
import { RowsPhotoAlbum } from "react-photo-album"
import "react-photo-album/rows.css";

const Gallery = () => {

    const photos = [
        {
            src: "/GalleryImage1.jpg",
            width: 600,
            height: 400
        },
        {
            src: "/GalleryImage2.jpg",
            width: 300,
            height: 400
        },
        {
            src: "/GalleryImage3.jpg",
            width: 550,
            height: 400
        },
        {
            src: "/GalleryImage4.jpg",
            width: 370,
            height: 400
        },
        {
            src: "/headshot.jpg",
            width: 400,
            height: 400
        },
        {
            src: "/GalleryImage5.jpg",
            width: 560,
            height: 400
        },
        {
            src: "/GalleryImage6.jpg",
            width: 550,
            height: 400
        },
        {
            src: "/GalleryImage7.jpg",
            width: 270,
            height: 400
        }
    ]


    const RenderImage = (props: any) => {
        const { style, ...rest } = props;
        return (
            <div
                style={{
                    ...style,
                    overflow: "hidden",
                    borderRadius: "5px",
                }}
                {...rest}
            >
            </div>
        )
    }
    return (

        <RowsPhotoAlbum
            photos={photos}
            render={{
                wrapper: RenderImage
            }}
            spacing={15}
            rowConstraints={{ maxPhotos: 3 }}
            targetRowHeight={300}
        />
    )
}

export default Gallery