export interface User {
    id: number
    name: string
    url: string
    description: string
    link: string
    slug: string
    avatar_urls: AvatarUrls
    meta: any[]
    _links: Links
}

export interface AvatarUrls {
    "24": string
    "48": string
    "96": string
}

export interface Links {
    self: Self[]
    collection: Collection[]
}

export interface Self {
    href: string
}

export interface Collection {
    href: string
}
