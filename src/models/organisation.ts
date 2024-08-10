import { Destination } from "./destination"
import { Program } from "./program"
import { Suggestion } from "./suggestion"

export class Organisation {
    id: string
    start: Date
    end: Date
    local_price: number
    stranger_price: number
    programs: Program[]
    suggestions: Suggestion[]
    destination: Destination
    created_at: Date
    updated_at: Date
    constructor(
        id: string,
        start: Date,
        end: Date,
        local_price: number,
        stranger_price: number,
        programs: Program[],
        suggestions: Suggestion[],
        destination: Destination,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.start = start
        this.end = end
        this.local_price = local_price
        this.stranger_price = stranger_price
        this.programs = programs
        this.suggestions = suggestions
        this.destination = destination
        this.created_at = created_at
        this.updated_at = updated_at
    }
}