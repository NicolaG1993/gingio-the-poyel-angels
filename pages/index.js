import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import gingioLogo from "../public/assets/gingio.png";

export default function Home({ scrollTop, width, height, isSmallDevice }) {
    const [animationReady, setAnimationReady] = useState(false);
    const [chatButton, setChatButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationReady(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    const renderAnimationA = animationReady
        ? {
              transform: "translateX(0)",
              opacity: "1",
          }
        : {
              transform: "translateX(-50%)",
              opacity: "0",
          };
    const renderAnimationB = animationReady
        ? {
              transform: "translateY(0)",
              opacity: "1",
          }
        : {
              transform: "translateY(-50px)",
              opacity: "0",
          };

    return (
        <>
            <Head>
                <title>The Poyel Angels</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.section} id={styles.Home}>
                    <div>
                        <h1>THE POYEL ANGELS</h1>
                        <h2>
                            THE GLOBAL CONCIERGE FOR THE FEMALE DJ’S COMMUNITY!
                        </h2>
                        <div>
                            <span style={renderAnimationA}>
                                POWERED BY
                                <a
                                    href="https://www.gingio.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={gingioLogo}
                                        width="auto"
                                        // height={width < 720 ? "15" : "38"}
                                        height={"38"}
                                        alt="Gingio"
                                    />
                                </a>
                            </span>
                        </div>
                    </div>
                </section>

                <section className={styles.section} id={styles.Intro}>
                    <div className={styles.circleBox}>
                        <h3>
                            <span className="bold">FIRST-CLASS</span> IMAGE
                            PRODUCTION PROMOTIONAL{" "}
                            <span className="bold">#SOLUTIONS</span>
                        </h3>
                    </div>

                    <div>
                        <p>
                            <span className="bold">LOS ANGELES •</span> LUGANO{" "}
                            <span className="bold">• MILAN •</span> IBIZA{" "}
                            <span className="bold">• DUBAI •</span> LONDON{" "}
                            <span className="bold">• CAPE TOWN •</span> MONACO{" "}
                            <span className="bold">• SAINT TROPEZ •</span>{" "}
                            BARCELONA <span className="bold">• BERLIN •</span>{" "}
                            NEW YORK <span className="bold">• MIAMI •</span>{" "}
                            MALTA <span className="bold">• TOKYO •</span>{" "}
                            AMSTERDAM{" "}
                            <span className="bold">• HONG KONG •</span> ISTANBUL
                            KIEV <span className="bold">• MOSCOW •</span> BALI{" "}
                            <span className="bold">• PARIS •</span> ZURICH{" "}
                            <span className="bold">• ST. MORITZ •</span> TEL
                            AVIV <span className="bold">• SIDNEY •</span>{" "}
                            SINGAPORE <span className="bold">• BEIJING</span>
                        </p>
                    </div>
                </section>

                <section className={styles.section} id={styles.Clients}>
                    <h4>CLIENTS AND PARTNERS</h4>
                    <div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                        <div className={styles.fakeLogo}></div>
                    </div>
                </section>

                <section className={styles.section} id={styles.Book}>
                    <a
                        className={styles.circleBox}
                        href="mailto:freemusicconsultant@gingio.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h5>BOOK APPOINTMENT</h5>
                    </a>

                    <div>
                        <p>WE ARE HERE TO DISCUSS HOW WE CAN ASSIST YOU</p>
                    </div>
                </section>

                <section
                    className={styles.section}
                    id={styles.Contact}
                ></section>
            </main>
        </>
    );
}
