import { Organisation } from "./organisation"

export class Suggestion {
    id: string
    description: string
    organisation: Organisation
    created_at: Date
    updated_at: Date
    constructor(
        id: string,
        description: string,
        organisation: Organisation,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.description = description
        this.organisation = organisation
        this.created_at = created_at
        this.updated_at = updated_at
    }
}