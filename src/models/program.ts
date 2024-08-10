export class Program {
    id: string
    date: Date
    title: string
    description: string
    galerie: string
    created_at: Date
    updated_at: Date

    constructor(
        id: string,
        date: Date,
        title: string,
        description: string,
        galerie: string,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id
        this.date = date
        this.title = title
        this.description = description
        this.galerie = galerie
        this.created_at = created_at
        this.updated_at = updated_at
    }
}