import { Variants } from "framer-motion";

export const variantsLeftNav: Variants = {
    close: { opacity: 0, scale: 0, width: 0, transformOrigin: 'top left', transition: { when: 'afterChildren', staggerChildren: .05 } },
    open: { opacity: 1, scale: 1, width: '200px', transformOrigin: 'top left', transition: { when: 'beforeChildren', staggerChildren: .05 } }
}
export const variantsLeftNavChild: Variants = {
    close: { opacity: 0, x: -10, y: -10 },
    open: { opacity: 1, x: 0, y: 0 }
}