import { FunctionComponent, useEffect } from "react";
import TitleProgramCard from "./card/title-program-card";
import CustomTextarea from "./form/custom-textarea";
import CustomButton from "./custom-button";
import StandardCard from "./card/standard-card";
import { Destination } from "../models/destination";
import { useSuggesionValidation } from "../hooks/useSuggestionValidation";
import { useCreateSuggestion, useGetSuggestions } from "../supabase/suggestions-supabase";
import { useChoiceOrganisation } from "../hooks/useChoiceOrganisation";
import { useAuth } from "../hooks/useAuth";
import { Suggestion } from "../models/suggestion";

type Props = {
    destination: Destination
}
const Suggestions: FunctionComponent<Props> = ({ destination }) => {
    const { isAuth, clientAuth } = useAuth()
    const { organisationChoice } = useChoiceOrganisation()
    const { suggestionField, handleSuggestionField, clearField } = useSuggesionValidation()
    const { stateCreateSuggestion, createSuggestion } = useCreateSuggestion()
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        createSuggestion(suggestionField, organisationChoice, clientAuth, clearField)
    }
    const { stateGetSuggestions, getSuggestions, suggestions } = useGetSuggestions()
    useEffect(() => {
        if (organisationChoice)
            getSuggestions(organisationChoice)
    }, [organisationChoice])
    return (
        <div className="w-full">
            <TitleProgramCard title="Votre suggestion pour le :" destination={destination} />
            <StandardCard>
                {
                    isAuth ? (
                        <form action="" onSubmit={handleSubmit}>
                            <CustomTextarea
                                field={suggestionField}
                                onChange={handleSuggestionField}
                                name="suggestion"
                                placeholder="Votre suggestion..."
                            />
                            <CustomButton isLoading={stateCreateSuggestion.isLoading} text="Envoyer" />
                        </form>
                    ) : (
                        <p className="text-sm">🔓Veuillez vous connecter pour soumettre une suggestion.</p>
                    )
                }
            </StandardCard>
            <StandardCard>
                {
                    stateGetSuggestions.isLoading ? (
                        <>
                            <LoadingSuggesstionCard />
                            <LoadingSuggesstionCard />
                        </>
                    ) : (
                        suggestions.length > 0 ? (
                            suggestions.map((suggestion, index) => (
                                <SuggesstionCard key={index} suggestion={suggestion} />
                            ))
                        ) : (
                            <p className="text-sm text-center">💡Soyez le premier à partager votre idée.</p>
                        )
                    )
                }

            </StandardCard>
        </div>
    )
}
export default Suggestions

type cardProps = {
    suggestion: Suggestion
}
const SuggesstionCard: FunctionComponent<cardProps> = ({ suggestion }) => {
    return (
        <div className="mb-6">
            <div className="pb-1 mb-1 border-b-[1px]">
                <p className="capitalize text-secondary text-sm">{suggestion.clients.name}</p>
                <p className="text-xs">{suggestion.clients.email}</p>
            </div>
            <div className="bg-background rounded-md py-2 px-4">{suggestion.description}</div>
        </div>
    )
}
const LoadingSuggesstionCard: FunctionComponent = () => {
    return (
        <div className="mb-6 animate-pulse">
            <div className="pb-1 mb-1 border-b-[1px]">
                <p className="w-1/2 h-3 bg-background mb-1" />
                <p className="w-2/3 h-2 bg-background mb-1" />
            </div>
            <div className="w-full h-28 bg-background rounded-md py-2 px-4" />
        </div>
    )
}