import { Organisation } from "./organisation"

export class Destination {
    id: string
    title: string
    description: string
    history: string
    galeries: string[]
    localisation: string
    coordinates: number[]
    type: string
    organisations: Organisation[]
    created_at: Date
    updated_at: Date

    constructor(
        id: string,
        title: string,
        description: string,
        history: string,
        galeries: string[],
        localisation: string,
        coordinates: number[],
        type: string,
        organisations: Organisation[],
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.history = history
        this.galeries = galeries
        this.localisation = localisation
        this.coordinates = coordinates
        this.type = type
        this.organisations = organisations
        this.created_at = created_at
        this.updated_at = updated_at
    }
}