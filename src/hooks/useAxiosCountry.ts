import { useState } from 'react';
import { stateAxios } from '../tools/type';
import axios from 'axios';
export const useAxiosCountry = () => {
    const [stateAxios, setStateAxios] = useState<stateAxios>({
        data: [],
        isLoading: false,
        errorMessage: ''
    })

    const getCountry = async () => {
        try {
            setStateAxios({ ...stateAxios, isLoading: true })
            const response = await axios.get('https://restcountries.com/v3.1/all')
            setStateAxios({ data: response.data, isLoading: false, errorMessage: '' })
        } catch (error) {
            let errorMessage = "Une erreur se produite."
            if (error instanceof Error)
                errorMessage = error.message
            setStateAxios({ data: [], isLoading: false, errorMessage: errorMessage })
        }
    }
    return {
        stateAxios,
        getCountry
    }
}