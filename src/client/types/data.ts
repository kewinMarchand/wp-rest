export interface Data {
    name: string
    description: string
    url: string
    home: string
    gmt_offset: number
    timezone_string: string
    namespaces: string[]
    authentication: Authentication
    routes: Routes
    site_logo: number
    site_icon: number
    site_icon_url: string
    _links: Links12
}

export interface Authentication {
    "application-passwords": ApplicationPasswords
}

export interface ApplicationPasswords {
    endpoints: Endpoints
}

export interface Endpoints {
    authorization: string
}

export interface Routes {
    "/": GeneratedType
    "/batch/v1": BatchV1
    "/wp/v2": WpV2
    "/wp/v2/posts": WpV2Posts
    "/wp/v2/pages": WpV2Pages
    "/wp/v2/blocks": WpV2Blocks
    "/wp/v2/templates": WpV2Templates
    "/wp/v2/templates/lookup": WpV2TemplatesLookup
    "/wp/v2/template-parts": WpV2TemplateParts
    "/wp/v2/template-parts/lookup": WpV2TemplatePartsLookup
    "/wp/v2/navigation": WpV2Navigation
}

export interface GeneratedType {
    namespace: string
    methods: string[]
    endpoints: Endpoint[]
    _links: Links
}

export interface Endpoint {
    methods: string[]
    args: Args
}

export interface Args {
    context: Context
}

export interface Context {
    default: string
    required: boolean
}

export interface Links {
    self: Self[]
}

export interface Self {
    href: string
}

export interface BatchV1 {
    namespace: string
    methods: string[]
    endpoints: Endpoint2[]
    _links: Links2
}

export interface Endpoint2 {
    methods: string[]
    args: Args2
}

export interface Args2 {
    validation: Validation
    requests: Requests
}

export interface Validation {
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface Requests {
    type: string
    maxItems: number
    items: Items
    required: boolean
}

export interface Items {
    type: string
    properties: Properties
}

export interface Properties {
    method: Method
    path: Path
    body: Body
    headers: Headers
}

export interface Method {
    type: string
    enum: string[]
    default: string
}

export interface Path {
    type: string
    required: boolean
}

export interface Body {
    type: string
    properties: any[]
    additionalProperties: boolean
}

export interface Headers {
    type: string
    properties: any[]
    additionalProperties: AdditionalProperties
}

export interface AdditionalProperties {
    type: string[]
    items: Items2
}

export interface Items2 {
    type: string
}

export interface Links2 {
    self: Self2[]
}

export interface Self2 {
    href: string
}

export interface WpV2 {
    namespace: string
    methods: string[]
    endpoints: Endpoint3[]
    _links: Links3
}

export interface Endpoint3 {
    methods: string[]
    args: Args3
}

export interface Args3 {
    namespace: Namespace
    context: Context2
}

export interface Namespace {
    default: string
    required: boolean
}

export interface Context2 {
    default: string
    required: boolean
}

export interface Links3 {
    self: Self3[]
}

export interface Self3 {
    href: string
}

export interface WpV2Posts {
    namespace: string
    methods: string[]
    endpoints: Endpoint4[]
    _links: Links4
}

export interface Endpoint4 {
    methods: string[]
    allow_batch: AllowBatch
    args: Args4
}

export interface AllowBatch {
    v1: boolean
}

export interface Args4 {
    context?: Context3
    page?: Page
    per_page?: PerPage
    search?: Search
    after?: After
    modified_after?: ModifiedAfter
    author: Author
    author_exclude?: AuthorExclude
    before?: Before
    modified_before?: ModifiedBefore
    exclude?: Exclude
    include?: Include
    offset?: Offset
    order?: Order
    orderby?: Orderby
    search_columns?: SearchColumns
    slug: Slug
    status: Status
    tax_relation?: TaxRelation
    categories: Categories
    categories_exclude?: CategoriesExclude
    tags: Tags
    tags_exclude?: TagsExclude
    sticky: Sticky
    date?: Date
    date_gmt?: DateGmt
    password?: Password
    title?: Title
    content?: Content
    excerpt?: Excerpt
    featured_media?: FeaturedMedia
    comment_status?: CommentStatus
    ping_status?: PingStatus
    format?: Format
    meta?: Meta
    template?: Template
}

export interface Context3 {
    description: string
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface Page {
    description: string
    type: string
    default: number
    minimum: number
    required: boolean
}

export interface PerPage {
    description: string
    type: string
    default: number
    minimum: number
    maximum: number
    required: boolean
}

export interface Search {
    description: string
    type: string
    required: boolean
}

export interface After {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedAfter {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Author {
    description: string
    type: string
    items?: Items3
    default?: any[]
    required: boolean
}

export interface Items3 {
    type: string
}

export interface AuthorExclude {
    description: string
    type: string
    items: Items4
    default: any[]
    required: boolean
}

export interface Items4 {
    type: string
}

export interface Before {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedBefore {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Exclude {
    description: string
    type: string
    items: Items5
    default: any[]
    required: boolean
}

export interface Items5 {
    type: string
}

export interface Include {
    description: string
    type: string
    items: Items6
    default: any[]
    required: boolean
}

export interface Items6 {
    type: string
}

export interface Offset {
    description: string
    type: string
    required: boolean
}

export interface Order {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface Orderby {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface SearchColumns {
    default: any[]
    description: string
    type: string
    items: Items7
    required: boolean
}

export interface Items7 {
    enum: string[]
    type: string
}

export interface Slug {
    description: string
    type: string
    items?: Items8
    required: boolean
}

export interface Items8 {
    type: string
}

export interface Status {
    default?: string
    description: string
    type: string
    items?: Items9
    required: boolean
    enum?: string[]
}

export interface Items9 {
    enum: string[]
    type: string
}

export interface TaxRelation {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface Categories {
    description: string
    type: any
    oneOf?: OneOf[]
    required: boolean
    items?: Items12
}

export interface OneOf {
    title: string
    description: string
    type: string
    items?: Items10
    properties?: Properties2
    additionalProperties?: boolean
}

export interface Items10 {
    type: string
}

export interface Properties2 {
    terms: Terms
    include_children: IncludeChildren
    operator: Operator
}

export interface Terms {
    description: string
    type: string
    items: Items11
    default: any[]
}

export interface Items11 {
    type: string
}

export interface IncludeChildren {
    description: string
    type: string
    default: boolean
}

export interface Operator {
    description: string
    type: string
    enum: string[]
    default: string
}

export interface Items12 {
    type: string
}

export interface CategoriesExclude {
    description: string
    type: string[]
    oneOf: OneOf2[]
    required: boolean
}

export interface OneOf2 {
    title: string
    description: string
    type: string
    items?: Items13
    properties?: Properties3
    additionalProperties?: boolean
}

export interface Items13 {
    type: string
}

export interface Properties3 {
    terms: Terms2
    include_children: IncludeChildren2
}

export interface Terms2 {
    description: string
    type: string
    items: Items14
    default: any[]
}

export interface Items14 {
    type: string
}

export interface IncludeChildren2 {
    description: string
    type: string
    default: boolean
}

export interface Tags {
    description: string
    type: any
    oneOf?: OneOf3[]
    required: boolean
    items?: Items17
}

export interface OneOf3 {
    title: string
    description: string
    type: string
    items?: Items15
    properties?: Properties4
    additionalProperties?: boolean
}

export interface Items15 {
    type: string
}

export interface Properties4 {
    terms: Terms3
    operator: Operator2
}

export interface Terms3 {
    description: string
    type: string
    items: Items16
    default: any[]
}

export interface Items16 {
    type: string
}

export interface Operator2 {
    description: string
    type: string
    enum: string[]
    default: string
}

export interface Items17 {
    type: string
}

export interface TagsExclude {
    description: string
    type: string[]
    oneOf: OneOf4[]
    required: boolean
}

export interface OneOf4 {
    title: string
    description: string
    type: string
    items?: Items18
    properties?: Properties5
    additionalProperties?: boolean
}

export interface Items18 {
    type: string
}

export interface Properties5 {
    terms: Terms4
}

export interface Terms4 {
    description: string
    type: string
    items: Items19
    default: any[]
}

export interface Items19 {
    type: string
}

export interface Sticky {
    description: string
    type: string
    required: boolean
}

export interface Date {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface DateGmt {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface Password {
    description: string
    type: string
    required: boolean
}

export interface Title {
    description: string
    type: string
    properties: Properties6
    required: boolean
}

export interface Properties6 {
    raw: Raw
    rendered: Rendered
}

export interface Raw {
    description: string
    type: string
    context: string[]
}

export interface Rendered {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Content {
    description: string
    type: string
    properties: Properties7
    required: boolean
}

export interface Properties7 {
    raw: Raw2
    rendered: Rendered2
    block_version: BlockVersion
    protected: Protected
}

export interface Raw2 {
    description: string
    type: string
    context: string[]
}

export interface Rendered2 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface BlockVersion {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Protected {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Excerpt {
    description: string
    type: string
    properties: Properties8
    required: boolean
}

export interface Properties8 {
    raw: Raw3
    rendered: Rendered3
    protected: Protected2
}

export interface Raw3 {
    description: string
    type: string
    context: string[]
}

export interface Rendered3 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Protected2 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface FeaturedMedia {
    description: string
    type: string
    required: boolean
}

export interface CommentStatus {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface PingStatus {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface Format {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface Meta {
    description: string
    type: string
    properties: Properties9
    required: boolean
}

export interface Properties9 {
    footnotes: Footnotes
}

export interface Footnotes {
    type: string
    description: string
    default: string
}

export interface Template {
    description: string
    type: string
    required: boolean
}

export interface Links4 {
    self: Self4[]
}

export interface Self4 {
    href: string
}

export interface WpV2Pages {
    namespace: string
    methods: string[]
    endpoints: Endpoint5[]
    _links: Links5
}

export interface Endpoint5 {
    methods: string[]
    allow_batch: AllowBatch2
    args: Args5
}

export interface AllowBatch2 {
    v1: boolean
}

export interface Args5 {
    context?: Context4
    page?: Page2
    per_page?: PerPage2
    search?: Search2
    after?: After2
    modified_after?: ModifiedAfter2
    author: Author2
    author_exclude?: AuthorExclude2
    before?: Before2
    modified_before?: ModifiedBefore2
    exclude?: Exclude2
    include?: Include2
    menu_order: MenuOrder
    offset?: Offset2
    order?: Order2
    orderby?: Orderby2
    parent: Parent
    parent_exclude?: ParentExclude
    search_columns?: SearchColumns2
    slug: Slug2
    status: Status2
    date?: Date2
    date_gmt?: DateGmt2
    password?: Password2
    title?: Title2
    content?: Content2
    excerpt?: Excerpt2
    featured_media?: FeaturedMedia2
    comment_status?: CommentStatus2
    ping_status?: PingStatus2
    meta?: Meta2
    template?: Template2
}

export interface Context4 {
    description: string
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface Page2 {
    description: string
    type: string
    default: number
    minimum: number
    required: boolean
}

export interface PerPage2 {
    description: string
    type: string
    default: number
    minimum: number
    maximum: number
    required: boolean
}

export interface Search2 {
    description: string
    type: string
    required: boolean
}

export interface After2 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedAfter2 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Author2 {
    description: string
    type: string
    items?: Items20
    default?: any[]
    required: boolean
}

export interface Items20 {
    type: string
}

export interface AuthorExclude2 {
    description: string
    type: string
    items: Items21
    default: any[]
    required: boolean
}

export interface Items21 {
    type: string
}

export interface Before2 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedBefore2 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Exclude2 {
    description: string
    type: string
    items: Items22
    default: any[]
    required: boolean
}

export interface Items22 {
    type: string
}

export interface Include2 {
    description: string
    type: string
    items: Items23
    default: any[]
    required: boolean
}

export interface Items23 {
    type: string
}

export interface MenuOrder {
    description: string
    type: string
    required: boolean
}

export interface Offset2 {
    description: string
    type: string
    required: boolean
}

export interface Order2 {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface Orderby2 {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface Parent {
    description: string
    type: string
    items?: Items24
    default?: any[]
    required: boolean
}

export interface Items24 {
    type: string
}

export interface ParentExclude {
    description: string
    type: string
    items: Items25
    default: any[]
    required: boolean
}

export interface Items25 {
    type: string
}

export interface SearchColumns2 {
    default: any[]
    description: string
    type: string
    items: Items26
    required: boolean
}

export interface Items26 {
    enum: string[]
    type: string
}

export interface Slug2 {
    description: string
    type: string
    items?: Items27
    required: boolean
}

export interface Items27 {
    type: string
}

export interface Status2 {
    default?: string
    description: string
    type: string
    items?: Items28
    required: boolean
    enum?: string[]
}

export interface Items28 {
    enum: string[]
    type: string
}

export interface Date2 {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface DateGmt2 {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface Password2 {
    description: string
    type: string
    required: boolean
}

export interface Title2 {
    description: string
    type: string
    properties: Properties10
    required: boolean
}

export interface Properties10 {
    raw: Raw4
    rendered: Rendered4
}

export interface Raw4 {
    description: string
    type: string
    context: string[]
}

export interface Rendered4 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Content2 {
    description: string
    type: string
    properties: Properties11
    required: boolean
}

export interface Properties11 {
    raw: Raw5
    rendered: Rendered5
    block_version: BlockVersion2
    protected: Protected3
}

export interface Raw5 {
    description: string
    type: string
    context: string[]
}

export interface Rendered5 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface BlockVersion2 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Protected3 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Excerpt2 {
    description: string
    type: string
    properties: Properties12
    required: boolean
}

export interface Properties12 {
    raw: Raw6
    rendered: Rendered6
    protected: Protected4
}

export interface Raw6 {
    description: string
    type: string
    context: string[]
}

export interface Rendered6 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Protected4 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface FeaturedMedia2 {
    description: string
    type: string
    required: boolean
}

export interface CommentStatus2 {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface PingStatus2 {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface Meta2 {
    description: string
    type: string
    properties: Properties13
    required: boolean
}

export interface Properties13 {
    footnotes: Footnotes2
}

export interface Footnotes2 {
    type: string
    description: string
    default: string
}

export interface Template2 {
    description: string
    type: string
    required: boolean
}

export interface Links5 {
    self: Self5[]
}

export interface Self5 {
    href: string
}

export interface WpV2Blocks {
    namespace: string
    methods: string[]
    endpoints: Endpoint6[]
    _links: Links6
}

export interface Endpoint6 {
    methods: string[]
    allow_batch: AllowBatch3
    args: Args6
}

export interface AllowBatch3 {
    v1: boolean
}

export interface Args6 {
    context?: Context5
    page?: Page3
    per_page?: PerPage3
    search?: Search3
    after?: After3
    modified_after?: ModifiedAfter3
    before?: Before3
    modified_before?: ModifiedBefore3
    exclude?: Exclude3
    include?: Include3
    offset?: Offset3
    order?: Order3
    orderby?: Orderby3
    search_columns?: SearchColumns3
    slug: Slug3
    status: Status3
    tax_relation?: TaxRelation2
    wp_pattern_category: WpPatternCategory
    wp_pattern_category_exclude?: WpPatternCategoryExclude
    date?: Date3
    date_gmt?: DateGmt3
    password?: Password3
    title?: Title3
    content?: Content3
    meta?: Meta3
    template?: Template3
}

export interface Context5 {
    description: string
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface Page3 {
    description: string
    type: string
    default: number
    minimum: number
    required: boolean
}

export interface PerPage3 {
    description: string
    type: string
    default: number
    minimum: number
    maximum: number
    required: boolean
}

export interface Search3 {
    description: string
    type: string
    required: boolean
}

export interface After3 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedAfter3 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Before3 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedBefore3 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Exclude3 {
    description: string
    type: string
    items: Items29
    default: any[]
    required: boolean
}

export interface Items29 {
    type: string
}

export interface Include3 {
    description: string
    type: string
    items: Items30
    default: any[]
    required: boolean
}

export interface Items30 {
    type: string
}

export interface Offset3 {
    description: string
    type: string
    required: boolean
}

export interface Order3 {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface Orderby3 {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface SearchColumns3 {
    default: any[]
    description: string
    type: string
    items: Items31
    required: boolean
}

export interface Items31 {
    enum: string[]
    type: string
}

export interface Slug3 {
    description: string
    type: string
    items?: Items32
    required: boolean
}

export interface Items32 {
    type: string
}

export interface Status3 {
    default?: string
    description: string
    type: string
    items?: Items33
    required: boolean
    enum?: string[]
}

export interface Items33 {
    enum: string[]
    type: string
}

export interface TaxRelation2 {
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface WpPatternCategory {
    description: string
    type: any
    oneOf?: OneOf5[]
    required: boolean
    items?: Items36
}

export interface OneOf5 {
    title: string
    description: string
    type: string
    items?: Items34
    properties?: Properties14
    additionalProperties?: boolean
}

export interface Items34 {
    type: string
}

export interface Properties14 {
    terms: Terms5
    operator: Operator3
}

export interface Terms5 {
    description: string
    type: string
    items: Items35
    default: any[]
}

export interface Items35 {
    type: string
}

export interface Operator3 {
    description: string
    type: string
    enum: string[]
    default: string
}

export interface Items36 {
    type: string
}

export interface WpPatternCategoryExclude {
    description: string
    type: string[]
    oneOf: OneOf6[]
    required: boolean
}

export interface OneOf6 {
    title: string
    description: string
    type: string
    items?: Items37
    properties?: Properties15
    additionalProperties?: boolean
}

export interface Items37 {
    type: string
}

export interface Properties15 {
    terms: Terms6
}

export interface Terms6 {
    description: string
    type: string
    items: Items38
    default: any[]
}

export interface Items38 {
    type: string
}

export interface Date3 {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface DateGmt3 {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface Password3 {
    description: string
    type: string
    required: boolean
}

export interface Title3 {
    description: string
    type: string
    properties: Properties16
    required: boolean
}

export interface Properties16 {
    raw: Raw7
}

export interface Raw7 {
    description: string
    type: string
    context: string[]
}

export interface Content3 {
    description: string
    type: string
    properties: Properties17
    required: boolean
}

export interface Properties17 {
    raw: Raw8
    block_version: BlockVersion3
    protected: Protected5
}

export interface Raw8 {
    description: string
    type: string
    context: string[]
}

export interface BlockVersion3 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Protected5 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Meta3 {
    description: string
    type: string
    properties: Properties18
    required: boolean
}

export interface Properties18 {
    wp_pattern_sync_status: WpPatternSyncStatus
}

export interface WpPatternSyncStatus {
    type: string
    description: string
    default: string
    enum: string[]
}

export interface Template3 {
    description: string
    type: string
    required: boolean
}

export interface Links6 {
    self: Self6[]
}

export interface Self6 {
    href: string
}

export interface WpV2Templates {
    namespace: string
    methods: string[]
    endpoints: Endpoint7[]
    _links: Links7
}

export interface Endpoint7 {
    methods: string[]
    args: Args7
}

export interface Args7 {
    context?: Context6
    wp_id?: WpId
    area?: Area
    post_type?: PostType
    slug?: Slug4
    theme?: Theme
    type?: Type
    content?: Content4
    title?: Title4
    description?: Description
    status?: Status4
    author?: Author3
}

export interface Context6 {
    description: string
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface WpId {
    description: string
    type: string
    required: boolean
}

export interface Area {
    description: string
    type: string
    required: boolean
}

export interface PostType {
    description: string
    type: string
    required: boolean
}

export interface Slug4 {
    description: string
    type: string
    minLength: number
    pattern: string
    required: boolean
}

export interface Theme {
    description: string
    type: string
    required: boolean
}

export interface Type {
    description: string
    type: string
    required: boolean
}

export interface Content4 {
    default: string
    description: string
    type: string[]
    properties: Properties19
    required: boolean
}

export interface Properties19 {
    raw: Raw9
    block_version: BlockVersion4
}

export interface Raw9 {
    description: string
    type: string
    context: string[]
}

export interface BlockVersion4 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Title4 {
    default: string
    description: string
    type: string[]
    properties: Properties20
    required: boolean
}

export interface Properties20 {
    raw: Raw10
    rendered: Rendered7
}

export interface Raw10 {
    description: string
    type: string
    context: string[]
}

export interface Rendered7 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Description {
    default: string
    description: string
    type: string
    required: boolean
}

export interface Status4 {
    default: string
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface Author3 {
    description: string
    type: string
    required: boolean
}

export interface Links7 {
    self: Self7[]
}

export interface Self7 {
    href: string
}

export interface WpV2TemplatesLookup {
    namespace: string
    methods: string[]
    endpoints: Endpoint8[]
    _links: Links8
}

export interface Endpoint8 {
    methods: string[]
    args: Args8
}

export interface Args8 {
    slug: Slug5
    is_custom: IsCustom
    template_prefix: TemplatePrefix
}

export interface Slug5 {
    description: string
    type: string
    required: boolean
}

export interface IsCustom {
    description: string
    type: string
    required: boolean
}

export interface TemplatePrefix {
    description: string
    type: string
    required: boolean
}

export interface Links8 {
    self: Self8[]
}

export interface Self8 {
    href: string
}

export interface WpV2TemplateParts {
    namespace: string
    methods: string[]
    endpoints: Endpoint9[]
    _links: Links9
}

export interface Endpoint9 {
    methods: string[]
    args: Args9
}

export interface Args9 {
    context?: Context7
    wp_id?: WpId2
    area: Area2
    post_type?: PostType2
    slug?: Slug6
    theme?: Theme2
    type?: Type2
    content?: Content5
    title?: Title5
    description?: Description2
    status?: Status5
    author?: Author4
}

export interface Context7 {
    description: string
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface WpId2 {
    description: string
    type: string
    required: boolean
}

export interface Area2 {
    description: string
    type: string
    required: boolean
}

export interface PostType2 {
    description: string
    type: string
    required: boolean
}

export interface Slug6 {
    description: string
    type: string
    minLength: number
    pattern: string
    required: boolean
}

export interface Theme2 {
    description: string
    type: string
    required: boolean
}

export interface Type2 {
    description: string
    type: string
    required: boolean
}

export interface Content5 {
    default: string
    description: string
    type: string[]
    properties: Properties21
    required: boolean
}

export interface Properties21 {
    raw: Raw11
    block_version: BlockVersion5
}

export interface Raw11 {
    description: string
    type: string
    context: string[]
}

export interface BlockVersion5 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Title5 {
    default: string
    description: string
    type: string[]
    properties: Properties22
    required: boolean
}

export interface Properties22 {
    raw: Raw12
    rendered: Rendered8
}

export interface Raw12 {
    description: string
    type: string
    context: string[]
}

export interface Rendered8 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Description2 {
    default: string
    description: string
    type: string
    required: boolean
}

export interface Status5 {
    default: string
    description: string
    type: string
    enum: string[]
    required: boolean
}

export interface Author4 {
    description: string
    type: string
    required: boolean
}

export interface Links9 {
    self: Self9[]
}

export interface Self9 {
    href: string
}

export interface WpV2TemplatePartsLookup {
    namespace: string
    methods: string[]
    endpoints: Endpoint10[]
    _links: Links10
}

export interface Endpoint10 {
    methods: string[]
    args: Args10
}

export interface Args10 {
    slug: Slug7
    is_custom: IsCustom2
    template_prefix: TemplatePrefix2
}

export interface Slug7 {
    description: string
    type: string
    required: boolean
}

export interface IsCustom2 {
    description: string
    type: string
    required: boolean
}

export interface TemplatePrefix2 {
    description: string
    type: string
    required: boolean
}

export interface Links10 {
    self: Self10[]
}

export interface Self10 {
    href: string
}

export interface WpV2Navigation {
    namespace: string
    methods: string[]
    endpoints: Endpoint11[]
    _links: Links11
}

export interface Endpoint11 {
    methods: string[]
    allow_batch: AllowBatch4
    args: Args11
}

export interface AllowBatch4 {
    v1: boolean
}

export interface Args11 {
    context?: Context8
    page?: Page4
    per_page?: PerPage4
    search?: Search4
    after?: After4
    modified_after?: ModifiedAfter4
    before?: Before4
    modified_before?: ModifiedBefore4
    exclude?: Exclude4
    include?: Include4
    offset?: Offset4
    order?: Order4
    orderby?: Orderby4
    search_columns?: SearchColumns4
    slug: Slug8
    status: Status6
    date?: Date4
    date_gmt?: DateGmt4
    password?: Password4
    title?: Title6
    content?: Content6
    template?: Template4
}

export interface Context8 {
    description: string
    type: string
    enum: string[]
    default: string
    required: boolean
}

export interface Page4 {
    description: string
    type: string
    default: number
    minimum: number
    required: boolean
}

export interface PerPage4 {
    description: string
    type: string
    default: number
    minimum: number
    maximum: number
    required: boolean
}

export interface Search4 {
    description: string
    type: string
    required: boolean
}

export interface After4 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedAfter4 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Before4 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface ModifiedBefore4 {
    description: string
    type: string
    format: string
    required: boolean
}

export interface Exclude4 {
    description: string
    type: string
    items: Items39
    default: any[]
    required: boolean
}

export interface Items39 {
    type: string
}

export interface Include4 {
    description: string
    type: string
    items: Items40
    default: any[]
    required: boolean
}

export interface Items40 {
    type: string
}

export interface Offset4 {
    description: string
    type: string
    required: boolean
}

export interface Order4 {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface Orderby4 {
    description: string
    type: string
    default: string
    enum: string[]
    required: boolean
}

export interface SearchColumns4 {
    default: any[]
    description: string
    type: string
    items: Items41
    required: boolean
}

export interface Items41 {
    enum: string[]
    type: string
}

export interface Slug8 {
    description: string
    type: string
    items?: Items42
    required: boolean
}

export interface Items42 {
    type: string
}

export interface Status6 {
    default?: string
    description: string
    type: string
    items?: Items43
    required: boolean
    enum?: string[]
}

export interface Items43 {
    enum: string[]
    type: string
}

export interface Date4 {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface DateGmt4 {
    description: string
    type: string[]
    format: string
    required: boolean
}

export interface Password4 {
    description: string
    type: string
    required: boolean
}

export interface Title6 {
    description: string
    type: string
    properties: Properties23
    required: boolean
}

export interface Properties23 {
    raw: Raw13
    rendered: Rendered9
}

export interface Raw13 {
    description: string
    type: string
    context: string[]
}

export interface Rendered9 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Content6 {
    description: string
    type: string
    properties: Properties24
    required: boolean
}

export interface Properties24 {
    raw: Raw14
    rendered: Rendered10
    block_version: BlockVersion6
    protected: Protected6
}

export interface Raw14 {
    description: string
    type: string
    context: string[]
}

export interface Rendered10 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface BlockVersion6 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Protected6 {
    description: string
    type: string
    context: string[]
    readonly: boolean
}

export interface Template4 {
    description: string
    type: string
    required: boolean
}

export interface Links11 {
    self: Self11[]
}

export interface Self11 {
    href: string
}

export interface Links12 {
    help: Help[]
}

export interface Help {
    href: string
}
