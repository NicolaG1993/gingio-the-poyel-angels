import Image from "next/image";
import styles from "./Slider.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import gingioLogo from "../../public/assets/GINGIO • Logo • White Bold.png";

export default function Slider({
    renderAnimationA,
    renderAnimationB,
    renderAnimationC,
    logoHeight,
}) {
    /*
     * import and load all images
     * only after start render with fade in
     * animate images left to right and viceversa + fade
     */

    const slides = [
        // {
        //     src: "",
        //     alt: "",
        // },
        {
            src: "https://res.cloudinary.com/dg4i4hspr/image/upload/v1678692340/GINGIO%20-%20The%20Poyel%20Angels/office-optimize_dhm9ah.jpg",
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

                {slides.map((img, i) =>
                    i > 0 ? (
                        <div
                            key={img.alt}
                            className={styles["slide"]}
                            style={{
                                width: `100%`,
                                height: `100%`,
                                // position: "relative",
                                opacity:
                                    Number(activeSlide) === Number(i) ? 1 : 0,
                                transition: "opacity 0.5s ease-in-out",
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition:
                                        Number(activeSlide) === 2
                                            ? "top"
                                            : "center",
                                }}
                            />
                        </div>
                    ) : (
                        <div
                            key={img.alt}
                            className={`${styles["slide"]} ${styles["fake-slide"]}`}
                            style={{
                                width: `100%`,
                                height: `100%`,
                                // position: "relative",
                                opacity:
                                    Number(activeSlide) === Number(i) ? 1 : 0,
                                transition: "opacity 0.5s ease-in-out",
                                background: "transparent",
                                color: "black",
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
                            <h2 style={renderAnimationB}>
                                THE GLOBAL CONCIERGE FOR THE FEMALE DJ’S
                                COMMUNITY!
                            </h2>
                        </div>
                    )
                )}
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

            <div className={styles.content}>
                <div
                    className={styles.headingsWrap}
                    style={{
                        color: Number(activeSlide) === 0 ? "black" : "white",
                    }}
                >
                    <Link href={"/"}>
                        <h1 style={renderAnimationA}>THE POYEL ANGELS</h1>
                    </Link>
                    <div>
                        {/* <h2 style={renderAnimationB}>
                            THE GLOBAL CONCIERGE FOR THE FEMALE DJ’S COMMUNITY!
                        </h2> */}
                    </div>
                </div>
                <div className={styles.poweredByWrap}>
                    <span style={renderAnimationC} className={styles.poweredBy}>
                        <p>POWERED BY</p>
                        <a
                            href="https://www.gingio.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={gingioLogo}
                                width="auto"
                                height={logoHeight}
                                // height={"38"}
                                alt="Gingio"
                            />
                        </a>
                    </span>
                </div>
            </div>
        </>
    );
}

// 🧨 bisogna usare <Image/> per ottimizzare le prestazioni delle immagini in loading 🧨
