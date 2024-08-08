export type stateSupabase = {
    isLoading: boolean
    error?: string | null
}
export type destination = {
    id: string,
    title: string,
    description: string,
    history: string,
    galeries: string[],
    localisation: string,
    type: string,
    organisations: organisation[],
    created_at: Date,
    updated_at: Date
}

export type organisation = {
    id: string,
    start: Date,
    end: Date,
    local_price: number,
    stranger_price: number,
    programs: program[],
    destination: destination,
    created_at: Date,
    updated_at: Date
}

export type program = {
    id: string,
    date: Date,
    title: string,
    description: string,
    galerie: string,
    created_at: Date,
    updated_at: Date
}

export type field = {
    value: string,
    errorMessage: string,
    isValid: boolean
}