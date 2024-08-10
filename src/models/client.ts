export class Client {
    id: string
    email: string
    phone: string
    name: string
    created_at: string
    updated_at: string

    constructor(
        id: string,
        email: string,
        phone: string,
        name: string,
        created_at: string,
        updated_at: string
    ) {
        this.id = id
        this.email = email
        this.phone = phone
        this.name = name
        this.created_at = created_at
        this.updated_at = updated_at
    }
}