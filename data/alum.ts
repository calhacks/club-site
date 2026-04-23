import type { Photo } from "./events"

interface Company {
    name: string;
    link: string;
    image: Photo;
}

export const alum: Company[] = [
    {
        name: "Google",
        link: "https://google.com",
        image: {
            id: "google",
            src: require("@/assets/images/alum-logos/google.png"),
            alt: "google",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Amazon",
        link: "https://amazon.com",
        image: {
            id: "amazon",
            src: require("@/assets/images/alum-logos/amazon.png"),
            alt: "amazon",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Citadel",
        link: "https://citadel.com",
        image: {
            id: "citadel",
            src: require("@/assets/images/alum-logos/citadel.png"),
            alt: "citadel",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Twitch",
        link: "https://twitch.tv",
        image: {
            id: "twitch",
            src: require("@/assets/images/alum-logos/twitch.png"),
            alt: "twitch",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Apple",
        link: "https://apple.com",
        image: {
            id: "apple",
            src: require("@/assets/images/alum-logos/apple.png"),
            alt: "apple",
            width: 120,
            height: 60,
        }
    },
    {
        name: "HRT",
        link: "https://hudsonrivertrading.com",
        image: {
            id: "hrt",
            src: require("@/assets/images/alum-logos/hrt.png"),
            alt: "hrt",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Meta",
        link: "https://meta.com",
        image: {
            id: "meta",
            src: require("@/assets/images/alum-logos/meta.png"),
            alt: "meta",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Figma",
        link: "https://figma.com",
        image: {
            id: "figma",
            src: require("@/assets/images/alum-logos/figma.png"),
            alt: "figma",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Plaid",
        link: "https://plaid.com",
        image: {
            id: "plaid",
            src: require("@/assets/images/alum-logos/plaid.png"),
            alt: "plaid",
            width: 120,
            height: 60,
        }
    },
    {
        name: "GitHub",
        link: "https://github.com",
        image: {
            id: "github",
            src: require("@/assets/images/alum-logos/github.png"),
            alt: "github",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Waymo",
        link: "https://waymo.com",
        image: {
            id: "waymo",
            src: require("@/assets/images/alum-logos/waymo.png"),
            alt: "waymo",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Roblox",
        link: "https://roblox.com",
        image: {
            id: "roblox",
            src: require("@/assets/images/alum-logos/roblox.png"),
            alt: "roblox",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Uber",
        link: "https://uber.com",
        image: {
            id: "uber",
            src: require("@/assets/images/alum-logos/uber.png"),
            alt: "uber",
            width: 120,
            height: 60,
        }
    },
    {
        name: "Salesforce",
        link: "https://salesforce.com",
        image: {
            id: "salesforce",
            src: require("@/assets/images/alum-logos/salesforce.png"),
            alt: "salesforce",
            width: 120,
            height: 60,
        }
    },
    {
        name: "IMC",
        link: "https://imc.com",
        image: {
            id: "imc",
            src: require("@/assets/images/alum-logos/imc.png"),
            alt: "imc",
            width: 120,
            height: 60,
        }
    }
]