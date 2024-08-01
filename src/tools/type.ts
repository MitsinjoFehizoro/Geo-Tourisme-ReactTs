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
    created_at: Date,
    updated_at: Date
}