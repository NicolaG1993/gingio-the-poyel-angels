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
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1676559351/GINGIO%20-%20The%20Poyel%20Angels/IMG_6298_lqjcvt.jpg",
            alt: "Third slider picture",
        },
        {
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1676559354/GINGIO%20-%20The%20Poyel%20Angels/IMG_6296_j95v8r.jpg",
            alt: "First slider picture",
        },
        {
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1676559350/GINGIO%20-%20The%20Poyel%20Angels/Slide_1_ygp9ug.jpg",
            alt: "Second slider picture",
        },
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    // const [content, setContent] = useState(slides[0]);

    const autoPlay = 6;

    const nextSlide = () => {
        setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
        // setContent(slides[activeSlide]);
    };

    useEffect(() => {
        console.log(activeSlide);
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

                {slides.map((img, i) => (
                    <div
                        key={img.alt}
                        className={styles["slide"]}
                        style={{
                            width: `100%`,
                            height: `100%`,
                            // position: "relative",
                            opacity: Number(activeSlide) === Number(i) ? 1 : 0,
                            transition: "opacity 0.5s ease-in-out",
                        }}
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
                {/* <div
                    className={styles["slide"]}
                    style={{
                        // backgroundImage: `url(${content.src})`,
                        // WebkitTransition: "background-image 0.5s ease-in-out",
                        // transition: "background-image 0.5s ease-in-out",
                        width: `100%`,
                        height: `100%`,
                        position: "relative",
                    }}
                >
                    <Image
                        src={content.src}
                        alt={"Slide"}
                        fill
                        style={{
                            objectFit: "cover",
                            // objectPosition: "left",
                        }}
                    />
                </div> */}
            </div>
        </>
    );
}

// 🧨 bisogna usare <Image/> per ottimizzare le prestazioni delle immagini in loading 🧨
