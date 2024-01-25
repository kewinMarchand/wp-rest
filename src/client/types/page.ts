export interface Page {
    id: number
    date: string
    date_gmt: string
    guid: Guid
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: Title
    content: Content
    excerpt: Excerpt
    author: number
    featured_media: number
    parent: number
    menu_order: number
    comment_status: string
    ping_status: string
    template: string
    meta: Meta
    _links: Links
}

export interface Guid {
    rendered: string
}

export interface Title {
    rendered: string
}

export interface Content {
    rendered: string
    protected: boolean
}

export interface Excerpt {
    rendered: string
    protected: boolean
}

export interface Meta {
    footnotes: string
}

export interface Links {
    self: Self[]
    collection: Collection[]
    about: About[]
    author: Author[]
    replies: Reply[]
    "version-history": VersionHistory[]
    "predecessor-version": PredecessorVersion[]
    "wp:featuredmedia": Featuredmedum[]
    "wp:attachment": WpAttachment[]
    curies: Cury[]
}

export interface Self {
    href: string
}

export interface Collection {
    href: string
}

export interface About {
    href: string
}

export interface Author {
    embeddable: boolean
    href: string
}

export interface Reply {
    embeddable: boolean
    href: string
}

export interface VersionHistory {
    count: number
    href: string
}

export interface PredecessorVersion {
    id: number
    href: string
}

export interface Featuredmedum {
    embeddable: boolean
    href: string
}

export interface WpAttachment {
    href: string
}

export interface Cury {
    name: string
    href: string
    templated: boolean
}
