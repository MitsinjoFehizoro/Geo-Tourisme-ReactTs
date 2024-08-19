export class Contact {
    id: string
    email: string
    description: string
    is_client: boolean
    created_at: Date
    updated_at: Date
    constructor(
        id: string,
        email: string,
        description: string,
        is_client: boolean,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.email = email
        this.description = description
        this.is_client = is_client
        this.created_at = created_at
        this.updated_at = updated_at
    }
}