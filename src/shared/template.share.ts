import { Templates } from "./template.type.js";

export const allowedTemplates:Templates[] = [
    {
        key: "Front-end",
        flags: ["React", "Vue", "Angular"]
    },
    {
        key: "Back-end",
        flags: ["Nest", "Express"]
    },
    {
        key: "Full-Stack",
        flags: ["Next", "Nuxt"]
    },
    {
        key: "Lib",
        flags: ["Simple"]
    },
    {
        key: "Static",
        flags: ["Gatsby", "Hugo", "Astro"]
    }
];

