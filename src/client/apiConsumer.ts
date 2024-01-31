import {Page} from "./types/page";
import {Media} from "./types/media";
import {User} from "./types/user";
import {Post} from "./types/post";

export async function get(endpoint = ''): Promise<any> {
    // @ts-ignore
    return fetch(`${process.env.REACT_APP_API_URL}${endpoint}`)
        .then(response => response.json())
        .catch(error => console.log("Quelque chose s'est mal passé: ", error))
}

export async function getPages(): Promise<Page[]> {
    return get("/wp/v2/pages");
}

export async function getPosts(): Promise<Post[]> {
    return get("/wp/v2/posts");
}

export async function getMedias(): Promise<Media[]> {
    return get("/wp/v2/media")
}

export async function getUsers(): Promise<User[]> {
    return get("/wp/v2/users")
}
