import React, { useState } from "react"
import { field } from "../tools/type"
import { regexName } from "../tools/regex"

export const useNameValidation = () => {
    const [nameField, setNameField] = useState<field>({
        value: '',
        isValid: false,
        errorMessage: ''
    })

    const handleNameField = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (regexName.test(e.target.value)) {
            setNameField({ value: e.target.value, isValid: true, errorMessage: '' })
        } else {
            const errorMessage = "Entre 10 à 100 caractères, sans caractères spéciaux"
            setNameField({ value: e.target.value, isValid: false, errorMessage: errorMessage })
        }
    }

    return {
        nameField,
        handleNameField
    }
}