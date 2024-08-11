import { Client } from "./client"
import { Organisation } from "./organisation"

export class Suggestion {
    id: string
    description: string
    organisations: Organisation
    clients: Client
    created_at: Date
    updated_at: Date
    constructor(
        id: string,
        description: string,
        organisations: Organisation,
        clients: Client,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.description = description
        this.organisations = organisations
        this.clients = clients
        this.created_at = created_at
        this.updated_at = updated_at
    }
}