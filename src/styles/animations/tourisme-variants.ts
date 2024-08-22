import { Variants } from "framer-motion"
export const variantsSlide: Variants = {
    prev: { x: '0%' },
    next: { x: "-50%" }
}

export const variantsParentSlide: Variants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: .4,
            duration: .8
        }
    }
}
export const variantsImage_1: Variants = {
    offscreen: { rotate: 0, scale: 0 },
    onscreen: {
        rotate: 360, scale: 1,
        transition: {
            type: "spring",
            bounce: .3,
            duration: 1
        }
    }
}
export const variantsImage_2: Variants = {
    offscreen: { opacity: 0, x: -100, y: 100 },
    onscreen: {
        opacity: 1, x: 0, y: 0,
        transition: {
            type: "tween",
            duration: 0.8
        }
    }
}

export const variantsImage_3: Variants = {
    offscreen: { opacity: 0, x: 100, y: 100 },
    onscreen: {
        opacity: 1, x: 0, y: 0,
        transition: {
            type: "tween",
            duration: 0.6,
            delay: .2
        }
    }
}

export const variantsRond: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            duration: .3,
            delay: .8
        }
    }
}

export const variantsRondPrimary: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            duration: .3,
            delay: 1
        }
    }
}