import { FunctionComponent } from "react";
import TitleProgramCard from "./card/title-program-card";
import CustomTextarea from "./form/custom-textarea";
import CustomButton from "./custom-button";
import StandardCard from "./card/standard-card";
import { Destination } from "../models/destination";
import { useSuggesionValidation } from "../hooks/useSuggestionValidation";
import { useCreateSuggestion } from "../supabase/suggestions-supabase";
import { useChoiceOrganisation } from "../hooks/useChoiceOrganisation";

type Props = {
    destination: Destination
}
const Suggestion: FunctionComponent<Props> = ({ destination }) => {
    const { organisationChoice } = useChoiceOrganisation()
    const { suggestionField, handleSuggestionField, clearField } = useSuggesionValidation()
    const { stateCreateSuggestion, createSuggestion } = useCreateSuggestion()
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        createSuggestion(suggestionField, organisationChoice, clearField)
    }
    return (
        <div className="w-full">
            <TitleProgramCard title="Votre suggestion pour le :" destination={destination} />
            <StandardCard>
                <form action="" onSubmit={handleSubmit}>
                    <CustomTextarea
                        field={suggestionField}
                        onChange={handleSuggestionField}
                        name="suggestion"
                        placeholder="Votre suggestion..."
                    />
                    <CustomButton isLoading={stateCreateSuggestion.isLoading} text="Envoyer" />
                </form>
            </StandardCard>
            <StandardCard>
                <SuggesstionCard />
                <SuggesstionCard />
                <SuggesstionCard />
            </StandardCard>
        </div>
    )
}
export default Suggestion

const SuggesstionCard: FunctionComponent = () => {
    return (
        <div className="mb-6">
            <div className="pb-1 mb-1 border-b-[1px]">
                <p className="capitalize text-secondary text-sm">Mitsinjo</p>
                <p className="text-xs">mitsinjofehizoro@gmail.com</p>
            </div>
            <div className="bg-background rounded-md py-2 px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cum eos doloremque veritatis inventore dolores, ipsum natus laborum quae fugit
            </div>
        </div>
    )
}