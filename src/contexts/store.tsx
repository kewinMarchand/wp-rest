import React, {ReactElement, useReducer} from "react";
import {Page} from "../client/types/page";
import {Post} from "../client/types/post";
import {Media} from "../client/types/media";
import {User} from "../client/types/user";
import {Data} from "../client/types/data";

type AppStore = {
    data: Data | null,
    pages: Page[] | null,
    posts: Post[] | null,
    users: User[] | null,
    medias: Media[] | null
}

const initialState: AppStore = {
    data: null,
    pages: null,
    posts: null,
    users: null,
    medias: null
};

const reducer = (state: AppStore, action: { type: string, payload: any | null }) => {
    switch (action.type) {
        case "reset":
            return initialState
        case "set_pages":
            return { ...state, pages: action.payload }
        case "set_posts":
            return { ...state, posts: action.payload }
        case "set_users":
            return { ...state, users: action.payload }
        case "set_medias":
            return { ...state, medias: action.payload }
        default:
            return state
    }
};

type AppContextType = {
    store: AppStore,
    dispatch: React.Dispatch<{type: string, payload: any}>
}

export const AppContext = React.createContext<AppContextType>({store: initialState, dispatch: () => {}});

export const ContextProvider = ({children} : {children: ReactElement} ) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ store, dispatch }}>
            {children}
        </AppContext.Provider>
        )
}
