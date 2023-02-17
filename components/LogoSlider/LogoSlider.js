import Image from "next/image";
import styles from "./LogoSlider.module.css";
import { useState, useEffect } from "react";

export default function LogoSlider() {
    /*
     * import and load all images
     * only after start render with fade in
     * animate images left to right and viceversa + fade
     */

    const slides = [
        {
            src: "/assets/clients/DreamWorks - White.png",
            alt: "Dream Works",
        },
        {
            src: "/assets/clients/Epic - White.png",
            alt: "Epic",
        },
        {
            src: "/assets/clients/Hard Rock - White.png",
            alt: "Hard Rock",
        },
        {
            src: "/assets/clients/Ibis Hotels - White.png",
            alt: "Ibis Hotels",
        },
        {
            src: "/assets/clients/Interscope - White.png",
            alt: "Interscope",
        },
        {
            src: "/assets/clients/Sae - White.png",
            alt: "Sae",
        },
        {
            src: "/assets/clients/Sony - White.png",
            alt: "Sony",
        },
        {
            src: "/assets/clients/The Palace - White.png",
            alt: "The Palace",
        },
        {
            src: "/assets/clients/Versace - White.png",
            alt: "Versace",
        },
        {
            src: "/assets/clients/Waldorf Astoria - White.png",
            alt: "Waldorf Astoria",
        },
        {
            src: "/assets/clients/Warp - White.png",
            alt: "Warp",
        },
        {
            src: "/assets/clients/WB - White.png",
            alt: "Warner Bros",
        },
    ];

    // const [activeSlide, setActiveSlide] = useState(0);
    // // const [content, setContent] = useState(slides[0]);

    // const autoPlay = 6;

    // const nextSlide = () => {
    //     setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
    //     // setContent(slides[activeSlide]);
    // };

    return (
        <div className={styles.slider}>
            {slides.map((img, i) => (
                <div
                    key={img.alt}
                    className={styles.slide}
                    id={styles[`Slide${i + 1}`]}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
