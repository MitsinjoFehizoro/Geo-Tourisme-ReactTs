import { AuthError, PostgrestError } from "@supabase/supabase-js"
import { stateSupabase, toast } from "./type"

export const handleErrorSupabase = (error: PostgrestError | Error | AuthError, addToast: (toast: toast) => void, setStasteSupabase: (s: stateSupabase) => void) => {
    const errorMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.'
    addToast({ toast: errorMessage, isSucces: false })
    setStasteSupabase({ isLoading: false, error: error })
}



