import React, { useState } from "react"
import { field } from "../tools/type"
import { regexEmail } from "../tools/regex"

export const useEmailValidation = () => {
    const [emailField, setEmailField] = useState<field>({
        value: '',
        isValid: false,
        errorMessage: ''
    })
    const handleEmailField = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (regexEmail.test(e.target.value)) {
            setEmailField({ ...emailField, value: e.target.value, isValid: true, errorMessage: '' })
        } else {
            const errorMessage = 'Adresse email invalide.'
            setEmailField({ ...emailField, value: e.target.value, isValid: false, errorMessage: errorMessage })
        }
    }
    return {
        emailField,
        handleEmailField
    }
}