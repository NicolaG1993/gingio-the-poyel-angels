import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import gingioLogo from "../public/assets/gingio.png";
import Phone from "../public/assets/phone.svg";
import Email from "../public/assets/email.svg";
import Website from "../public/assets/website.svg";
import Slider from "../components/Slider/Slider.js";
import LogoSlider from "../components/LogoSlider/LogoSlider";
import LogoGrid from "../components/LogoGrid/LogoGrid";
import Link from "next/link";

export default function Home({ scrollTop, width, height, isSmallDevice }) {
    /* COMPONENT STATES */
    const [animationReady, setAnimationReady] = useState(false);
    const [chatButton, setChatButton] = useState(false);
    const [logoHeight, setLogoHeight] = useState("22");
    const [logoSlider, setLogoSlider] = useState(1);
    const [userDevice, setUserDevice] = useState("mobile");

    /* LOGO HEIGHT */
    useEffect(() => {
        if (width) {
            checkLogoHeight();
            checkUserDevice();
        }
    }, [width]);
    const checkLogoHeight = () => {
        if (width < 1400) {
            if (width < 470) {
                setLogoHeight("14");
            } else {
                setLogoHeight("15");
            }
        } else {
            setLogoHeight("16");
        }
    };
    const checkUserDevice = () => {
        if (width <= 680) {
            setUserDevice("mobile");
        } else {
            setUserDevice("screen");
        }
    };

    /* ANIMATIONS */
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
    const renderAnimationC = animationReady
        ? {
              transform: "translateY(0)",
              opacity: "1",
          }
        : {
              transform: "translateY(-50px)",
              opacity: "0",
          };

    /* DOM */
    return (
        <>
            <Head>
                <title>The Poyel Angels</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <section className={styles.section} id={styles.Home}>
                    <Slider renderAnimationB={renderAnimationB} />

                    <div className={styles.content}>
                        <div className={styles.headingsWrap}>
                            <Link href={"/"}>
                                <h1 style={renderAnimationA}>
                                    THE POYEL ANGELS
                                </h1>
                            </Link>
                            <div>
                                {/* <h2 style={renderAnimationB}>
                                    THE GLOBAL CONCIERGE FOR THE FEMALE DJ’S
                                    COMMUNITY!
                                </h2> */}
                            </div>
                        </div>
                        <div className={styles.poweredByWrap}>
                            <span
                                style={renderAnimationC}
                                className={styles.poweredBy}
                            >
                                POWERED BY
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
                </section>

                <section className={styles.section} id={styles.Intro}>
                    <div className={styles.circleBox}>
                        <span>
                            <h3>
                                <strong>FIRST-CLASS</strong> IMAGE PRODUCTION
                                PROMOTIONAL <strong>#SOLUTIONS</strong>
                            </h3>
                        </span>
                    </div>
                </section>

                <section className={styles.section} id={styles.Intro}>
                    <div className={styles.justifiedRowsWrap}>
                        <div className={styles.justifiedRow}>
                            <strong>LOS ANGELES •</strong> LUGANO{" "}
                            <strong>• MILAN •</strong> IBIZA{" "}
                            <strong>• DUBAI</strong>
                        </div>
                        <div className={styles.justifiedRow}>
                            LONDON <strong>• CAPE TOWN •</strong> MONACO
                            <strong> • SAINT-TROPEZ</strong>
                        </div>
                        <div className={styles.justifiedRow}>
                            {" "}
                            BARCELONA <strong>• BERLIN •</strong> NEW YORK
                            <strong> • MIAMI</strong>
                        </div>
                        <div className={styles.justifiedRow}>
                            MALTA <strong>• TOKYO •</strong> AMSTERDAM{" "}
                            <strong>• HONG KONG</strong>
                        </div>
                        <div className={styles.justifiedRow}>
                            ISTANBUL <strong>• PARIS •</strong> ZURICH{" "}
                            <strong>• ST. MORITZ</strong>
                        </div>
                        <div className={styles.justifiedRow}>
                            TEL AVIV <strong> • SIDNEY •</strong> SINGAPORE{" "}
                            <strong>• BEIJING •</strong> BALI
                        </div>
                    </div>
                    {/* <div>
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
                            <span className="bold">• HONG KONG •</span> ISTANBUL{" "}
                            <span className="bold">• PARIS •</span> ZURICH{" "}
                            <span className="bold">• ST. MORITZ •</span> TEL
                            AVIV <span className="bold">• SIDNEY •</span>{" "}
                            SINGAPORE <span className="bold">• BEIJING •</span>{" "}
                            BALI
                        </p>
                    </div> */}
                </section>

                <section className={styles.section} id={styles.Clients}>
                    <h4>CLIENTS AND PARTNERS</h4>
                    {userDevice === "screen" ? <LogoGrid /> : <LogoSlider />}
                </section>

                <section className={styles.section} id={styles.Contact}>
                    <div className={styles.wrap}>
                        <p className={styles.headline}>
                            WE ARE HERE TO DISCUSS HOW WE CAN ASSIST YOU
                        </p>

                        <h6>BE MORE!</h6>

                        <div className={styles.contactWrap}>
                            <div className={styles.address}>
                                <p>SWITZERLAND</p>
                                <div>
                                    <p>cp 698</p>
                                    <p>6612 Ascona</p>
                                    <a
                                        href="mailto:ascona@gingio.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.email}
                                    >
                                        <Email />
                                        <p>ascona@gingio.com</p>
                                    </a>
                                    <a
                                        href="tel:+41792403054"
                                        className={styles.phone}
                                    >
                                        <Phone />
                                        <p>+41 79 240-3054</p>
                                    </a>
                                </div>
                            </div>

                            <div className={styles.address}>
                                <p>UNITED STATES</p>
                                <div>
                                    <p>9440 Santa Monica Blvd, Suite 301</p>
                                    <p>Beverly Hills, CA 90210</p>
                                    <a
                                        href="mailto:beverlyhills@gingio.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.email}
                                    >
                                        <Email />
                                        <p>beverlyhills@gingio.com</p>
                                    </a>
                                    <a
                                        href="tel:+13102806893"
                                        className={styles.phone}
                                    >
                                        <Phone /> <p>+1 310 280-6893</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={styles.address}
                            id={styles.FinalAddress}
                        >
                            <div>
                                <a
                                    href="mailto:info@thepoyelangels.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.email}
                                >
                                    <Email />

                                    <p>info@thepoyelangels.com</p>
                                </a>
                                <a
                                    href="https://www.thepoyelangels.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.website}
                                >
                                    <Website />
                                    <p>www.thepoyelangels.com</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <p className={styles.copyrights}>
                    © Copyright {new Date().getFullYear()}
                    {" | "}All Rights Reserved.
                </p>
            </main>
        </>
    );
}
