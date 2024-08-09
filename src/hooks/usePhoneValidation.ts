import React, { useState } from "react"
import { field } from "../tools/type"
import { regexPhone, regexPhoneMadagascar } from "../tools/regex"

export const UsePhoneValidation = () => {
    const [phoneField, setPhondeField] = useState<field>({
        value: '',
        isValid: false,
        errorMessage: ''
    })
    const handlePhoneField = (country: object, e: React.ChangeEvent<HTMLInputElement>) => {
        if ((country as { name: { common: string } }).name.common === 'Madagascar' || (country as { name: { common: string } }).name.common === 'France') {
            if (regexPhoneMadagascar.test(e.target.value)) {
                setPhondeField({ value: e.target.value, isValid: true, errorMessage: '' })
            } else {
                const errorMessage = 'Numéro de téléphone invalide.'
                setPhondeField({ value: e.target.value, isValid: false, errorMessage: errorMessage })
            }
        } else {
            if (regexPhone.test(e.target.value)) {
                setPhondeField({ value: e.target.value, isValid: true, errorMessage: '' })
            } else {
                const errorMessage = 'Numéro de téléphone invalide.'
                setPhondeField({ value: e.target.value, isValid: false, errorMessage: errorMessage })
            }
        }
    }
    return {
        phoneField,
        handlePhoneField
    }
}