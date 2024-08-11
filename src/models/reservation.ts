import { Client } from "./client"
import { Organisation } from "./organisation"

export class Reservation {
    id: string
    local: number
    stranger: number
    state: string
    state_payement: number
    total: number
    clients: Client
    organisations: Organisation
    created_at: Date
    updated_at: Date
    constructor(
        id: string,
        local: number,
        stranger: number,
        state: string,
        state_payement: number,
        total: number,
        clients: Client,
        organisations: Organisation,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.local = local
        this.stranger = stranger
        this.state = state
        this.state_payement = state_payement
        this.total = total
        this.clients = clients
        this.organisations = organisations
        this.updated_at = updated_at
        this.created_at = created_at
    }
}