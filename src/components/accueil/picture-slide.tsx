import { FunctionComponent, useEffect, useState } from 'react'
import tetezana from '../../assets/images/Bemaraha/tetezana.jpg'
import tsingy from '../../assets/images/Bemaraha/tsingy.jpg'
import chute from '../../assets/images/Chute de la lylie et geyser/chute2.jpg'
import gesier from '../../assets/images/Chute de la lylie et geyser/gesier2.jpg'
import { motion } from 'framer-motion'

const PictureSlide: FunctionComponent = () => {
    const pictures = [tetezana, chute, tsingy, gesier]
    const [indexShow, setIndexShow] = useState(0)
    useEffect(() => {
        const changeIndex = setInterval(() => {
            setIndexShow(prevIndex => (prevIndex + 1) % pictures.length)
        }, 5000)
        return () => clearInterval(changeIndex)
    }, [indexShow, pictures.length])
    return (
        <div className="fixed w-full h-full overflow-hidden">
            <div className="absolute w-full h-full bg-secondary/90"></div>
            {
                pictures.map((src, index) =>
                    index == indexShow && (
                        <motion.img
                            key={index}
                            src={src}
                            className="h-full w-full lg:h-auto"
                        />
                    )
                )
            }
        </div>
    )
}
export default PictureSlide