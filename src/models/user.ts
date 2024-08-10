export class User {
    id: string
    email: string
    created_at: Date
    updated_at: Date

    constructor(
        id: string,
        email: string,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.email = email
        this.created_at = created_at
        this.updated_at = updated_at
    }
}