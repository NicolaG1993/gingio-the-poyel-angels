import Image from "next/image";
import styles from "./Slider.module.css";
import { useState, useEffect } from "react";

export default function Slider() {
    /*
     * import and load all images
     * only after start render with fade in
     * animate images left to right and viceversa + fade
     */

    const slides = [
        {
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1674385665/samples/ecommerce/analog-classic.jpg",
            alt: "First slider picture",
        },
        {
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1674385675/samples/ecommerce/leather-bag-gray.jpg",
            alt: "Second slider picture",
        },
        {
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1674385676/samples/ecommerce/accessories-bag.jpg",
            alt: "Third slider picture",
        },
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [content, setContent] = useState(slides[0]);

    const autoPlay = 4;

    const nextSlide = () => {
        setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
        setContent(slides[activeSlide]);
    };

    useEffect(() => {
        let interval = null;
        const play = () => {
            nextSlide();
        };

        if (autoPlay) {
            interval = setInterval(play, autoPlay * 1000);
        }

        return () => {
            if (autoPlay) {
                clearInterval(interval);
            }
        };
    }, [activeSlide]);

    return (
        <>
            <div className={styles.slider}>
                {/* <Image
                    src={content.src}
                    alt={content.alt}
                    // width="100"
                    // height="100"
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                /> */}

                <div
                    className={styles["slide"]}
                    style={{
                        backgroundImage: `url(${content.src})`,
                        WebkitTransition: "background-image 0.5s ease-in-out",
                        transition: "background-image 0.5s ease-in-out",
                        width: `100%`,
                        height: `100%`,
                    }}
                ></div>
            </div>
        </>
    );
}
