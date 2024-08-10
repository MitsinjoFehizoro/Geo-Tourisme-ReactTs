import { AuthError, PostgrestError } from "@supabase/supabase-js"

export type stateSupabase = {
    isLoading: boolean
    error: Error | AuthError | PostgrestError | null
}

export type toast = {
    toast: string,
    isSucces: boolean
}

export type field = {
    value: string,
    errorMessage: string,
    isValid: boolean
}

export type stateAxios = {
    data: [],
    isLoading: boolean,
    errorMessage: string
}
