import React, { ReactElement, useReducer } from "react";
import type { Page } from "../client/types/page";
import type { Post } from "../client/types/post";
import type { Media } from "../client/types/media";
import type { User } from "../client/types/user";
import type { Data } from "../client/types/data";

type AppStore = {
  data: Data | null;
  pages: Page[] | null;
  posts: Post[] | null;
  users: User[] | null;
  medias: Media[] | null;
};

const initialState: AppStore = {
  data: null,
  pages: null,
  posts: null,
  users: null,
  medias: null,
};

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

type StorePayload = {
  reset: null;
  set_pages: Page[];
  set_posts: Post[];
  set_users: User[];
  set_medias: Media[];
};

export type StoreActions =
  ActionMap<StorePayload>[keyof ActionMap<StorePayload>];

const reducer = (state: AppStore, action: StoreActions) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "set_pages":
      return { ...state, pages: action.payload };
    case "set_posts":
      return { ...state, posts: action.payload };
    case "set_users":
      return { ...state, users: action.payload };
    case "set_medias":
      return { ...state, medias: action.payload };
    default:
      return state;
  }
};

type AppContextType = {
  store: AppStore;
  dispatch: React.Dispatch<StoreActions>;
};

export const AppContext = React.createContext<AppContextType>({
  store: initialState,
  dispatch: () => null,
});

export const ContextProvider = ({ children }: { children: ReactElement }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
