import { WhyUs } from "./why-us"
import { Witness } from "./witness"

export class Information {
    id: string
    title: string
    description: string
    tourisme: string
    geo_tourisme: string
    why_us: WhyUs[]
    witnesses: Witness[]
    created_at: Date
    constructor(
        id: string,
        title: string,
        description: string,
        tourisme: string,
        geo_tourisme: string,
        why_us: WhyUs[],
        witnesses: Witness[],
        created_at: Date
    ) {
        this.id = id
        this.title = title
        this.description = description
        this.tourisme = tourisme
        this.geo_tourisme = geo_tourisme
        this.why_us = why_us
        this.witnesses = witnesses
        this.created_at = created_at
    }
}