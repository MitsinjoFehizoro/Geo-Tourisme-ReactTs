export type stateSupabase = {
    isLoading: boolean,
    data?: destination[] | null,
    error?: string | null
}
export type destination = {
    id: string,
    title: string,
    description: string,
    history: string,
    galeries: string[],
    type: string,
    created_at: Date,
    updated_at: Date
}