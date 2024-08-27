export class Information {
    id: string
    title: string
    description: string
    tourisme: string
    geo_tourisme: string
    created_at: Date
    constructor(
        id: string,
        title: string,
        description: string,
        tourisme: string,
        geo_tourisme: string,
        created_at: Date
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.tourisme = tourisme
        this.geo_tourisme = geo_tourisme
        this.created_at = created_at
    }
}