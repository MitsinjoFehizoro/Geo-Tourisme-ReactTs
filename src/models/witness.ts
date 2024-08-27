export class Witness {
    id: string
    author: string
    description: string
    picture: string
    created_at: Date
    updated_at: Date
    constructor(
        id: string,
        author: string,
        description: string,
        picture: string,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.author = author
        this.description = description
        this.picture = picture
        this.created_at = created_at
        this.updated_at = updated_at
    }
}