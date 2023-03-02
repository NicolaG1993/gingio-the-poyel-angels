import Image from "next/image";
import styles from "./LogoGrid.module.css";

export default function LogoGrid() {
    const icons = [
        {
            src: "/assets/clients/Accor Hotel - White.png",
            alt: "Accor Hotel",
        },
        {
            src: "/assets/clients/DefJam - White.png",
            alt: "DefJam",
        },
        {
            src: "/assets/clients/DreamWorks - White.png",
            alt: "Dream Works",
        },
        {
            src: "/assets/clients/Epic - White.png",
            alt: "Epic",
        },
        {
            src: "/assets/clients/Estrella - White.png",
            alt: "Estrella",
        },
        {
            src: "/assets/clients/Fentimans - White.png",
            alt: "Fentimans",
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
            src: "/assets/clients/Milan - White.png",
            alt: "Milan",
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
            src: "/assets/clients/Taittinger - White.png",
            alt: "Taittinger",
        },
        {
            src: "/assets/clients/Titos - White.png",
            alt: "Titos",
        },
        {
            src: "/assets/clients/The Palace - White.png",
            alt: "The Palace",
        },
        {
            src: "/assets/clients/Tramp London - White.png",
            alt: "Tramp London",
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

    return (
        <div className={styles.grid}>
            {icons.map((img, i) => (
                <div key={img.alt} className={styles.icon}>
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
