import { createReducer, on, createAction, props} from "@ngrx/store";

export interface FavoriteState {
    favorites: Array<number | any>;
}

export const initialState: FavoriteState = {
    favorites: []
}

export const addFavorite = createAction('[Favorites] Add favorite...',
                                        props<{ id: number }>()
)

export const removeFavorite = createAction('[Favorites] Removing favorite...',
                                        props<{ id: number }>()
)

export const reducer = createReducer(
    initialState,
    on(addFavorite, (state, { id }) => {
        state = {
            ...state,
            favorites: [...state.favorites, id]
        }
        return state;
    }),
    on(removeFavorite, (state, { id }) => {
        const arr = state.favorites.filter(res => res != id )
        state = {
            ...state,
            favorites: [arr]
        }
        return state;
    })

)
