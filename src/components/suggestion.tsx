import { FunctionComponent } from "react";
import TitleProgramCard from "./card/title-program-card";
import CustomTextarea from "./form/custom-textarea";
import { destination } from "../tools/type";
import CustomButton from "./custom-button";

type Props = {
    destination: destination
}
const Suggestion: FunctionComponent<Props> = ({ destination }) => {
    // const { organisationChoice } = useChoiceOrganisation()
    return (
        <div className="w-full">
            <TitleProgramCard title="Votre suggestion pour le :" destination={destination} />
            <form className="w-full rounded-md shadow p-4">
                <CustomTextarea />
                <CustomButton text="Envoyer"/>
            </form>
        </div>
    )
}
export default Suggestion