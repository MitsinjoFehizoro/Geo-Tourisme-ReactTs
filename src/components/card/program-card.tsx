import { FunctionComponent, useState } from "react";
import gesier from '../../assets/images/Bemaraha/tsingy.jpg'
import '../../styles/components/card/_program-card.scss'
import { motion } from "framer-motion";
import { variantsDestination, variantsDestinationChild } from "../../styles/animations/accueil-variants";

const ProgramCard: FunctionComponent = () => {
    const [stateDateDispo, setDateDispo] = useState<boolean>(false)
    const handleStateDateDispo = () => {
        setDateDispo(prevState => !prevState)
    }
    const menus = ["Teste1", "Teste2", "Teste3", "Teste4"]
    return (
        <div className="w-96  flex flex-col">
            <div className="flex flex-col justify-center border-l-8 border-primary py-4 mb-2">
                <h1 className="text-secondary text-xl font-bold uppercase px-4">Où allons-nous le : </h1>
                <div className="relative">
                    <div className="flex flex-row items-center justify-between px-4 cursor-pointer" onClick={handleStateDateDispo}>
                        <p><span>Vendredi. 08 aout 2024</span>&nbsp;-&nbsp;<span>Lundi. 20 aout 2024</span></p>
                        {
                            stateDateDispo ? (
                                <i className="fa fa-caret-down text-sm mr-2"></i>
                            ) : (
                                <i className="fa fa-caret-up text-sm mr-2"></i>
                            )
                        }
                    </div>
                    <div className="absolute w-full h-0">
                        <motion.div
                            variants={variantsDestination}
                            animate={stateDateDispo ? 'visible' : 'hidden'}
                            className="bg-white rounded-md py-4 px-2 mr-2"
                        >
                            {
                                menus.map(menu => (
                                    <motion.p
                                        key={menu}
                                        className="flex items-center px-4 w-full h-9 bg-background/50 rounded mb-1"
                                        variants={variantsDestinationChild}
                                    >
                                        {menu}
                                    </motion.p>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="p-2 bg-background">
                <div className="organisation">
                    <img src={gesier} className="w-full h-80" alt="" />
                    <div className="clip w-full bg-white">
                        <svg className="primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill='#F14902' fill-opacity="1" d="M0,0L34.3,26.7C68.6,53,137,107,206,133.3C274.3,160,343,160,411,133.3C480,107,549,53,617,48C685.7,43,754,85,823,96C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,186.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                        </svg>
                        <svg className="secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill='#fff' fill-opacity="1" d="M0,0L34.3,26.7C68.6,53,137,107,206,133.3C274.3,160,343,160,411,133.3C480,107,549,53,617,48C685.7,43,754,85,823,96C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,186.7C1302.9,181,1371,107,1406,69.3L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                        </svg>
                        <div className="detailOrganisation w-full h-full px-4">
                            <p className="text-xs">Vendredi, 12 juillet 2024 à 3:00</p>
                            <h1 className="uppercase text-lg text-secondary mb-2">Depart a Antananarivo</h1>
                            <p className="text-sm pb-8">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eligendi, a iure obcaecati neque numquam odit ipsum, est alias, sed deleniti maxime nisi quidem! Tempore dolor nam natus unde fugit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae possimus alias cupiditate qui perferendis, quos sequi consequuntur eum fugit, ullam nisi placeat exercitation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProgramCard