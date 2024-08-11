import { useState } from "react"
import { field } from "../tools/type"

export const useSuggesionValidation = () => {
    const [suggestionField, setSuggestionField] = useState<field>({
        value: '',
        isValid: false,
        errorMessage: ''
    })
    const handleSuggestionField = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (/^.{20,}$/.test(e.target.value)) {
            setSuggestionField({ value: e.target.value, isValid: true, errorMessage: '' })
        } else {
            const errorMessage = 'Votre suggestion est très courte.'
            setSuggestionField({ value: e.target.value, isValid: false, errorMessage: errorMessage })
        }
    }
    const clearField = () => {
        setSuggestionField({
            value: '',
            isValid: false,
            errorMessage: ''
        })
    }
    return {
        suggestionField,
        handleSuggestionField,
        clearField
    }
}