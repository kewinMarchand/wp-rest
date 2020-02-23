import React from "react";

export const initialState = { 
    data: null,
    pages: null,
    posts: null,
    users: null,
    medias: null 
};

export const reducer = (state, action) => {
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

export const Context = React.createContext();