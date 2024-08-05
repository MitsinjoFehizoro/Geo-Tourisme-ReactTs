import { FunctionComponent } from "react";
import { destination } from "../tools/type";
import TitleProgramCard from "./card/title-program-card";
import StandardCard from "./card/standard-card";
import CustomInput from "./form/custom-input";
import CustomButton from "./custom-button";

type Props = {
    destination: destination
}
const Reservation: FunctionComponent<Props> = ({ destination }) => {
    return (
        <div className="w-full">
            <TitleProgramCard title="Reserver le :" destination={destination} />
            <StandardCard>
                <form action="">
                    <CustomInput type="email" placeholder="email@exemple.com" />
                    <CustomInput type="text" placeholder="votre nom" />
                    <CustomInput type="text" placeholder="votre prénom" />
                    <CustomInput type="text" placeholder="+261 3x xx xxx xx" />
                    <CustomInput type="text" placeholder="pariticipants" />
                    <CustomInput type="password" placeholder="mot de passe" />
                    <CustomButton text="Réserver"/>
                </form>
            </StandardCard>
        </div>
    )
}
export default Reservation