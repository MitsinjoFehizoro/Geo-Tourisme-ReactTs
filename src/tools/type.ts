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
    created_at: Date,
    updated_at: Date
}