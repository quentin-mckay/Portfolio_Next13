export const myVariants = {
    hidden: {
        opacity: 0,
        // x:-500
    },
    show: {
        opacity: 1,
        // x: 0,
        transition: {
            duration: 1,
        },
    },
}


// NAV

export const navContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2,
        },
    },
}

export const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}


// HERO

export const heroContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1.6,
            staggerChildren: 0.2,
        },
    },
}

export const heroItem = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}


// PROJECT CARD

export const projectCard = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    }
}


// SIDEBARS

export const sidebar = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            delay: 3,
            duration: 0.5
        }
    }
}