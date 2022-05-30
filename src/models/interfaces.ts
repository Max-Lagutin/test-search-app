export interface ICharacter {
    created?: string
    gender?: string
    episode?: string[]
    id?: number
    image?: string
    location?: {
        name: string
        url: string
    }
    name?: string
    origin?: { name: string; url: string }
    species?: string
    status?: string
    type?: string
    url?: string
}

export interface IEpisode {
    air_date?: string
    characters?: string[]
    created?: string
    episode?: string
    id?: number
    name?: string
    url?: string
}

export interface IInfo {
    count?: number
    next?: string
    pages?: number
    prev?: string
}

export interface IParams {
    pageNumber?: number
    search?: string
    status?: string
    gender?: string
    species?: string
}
