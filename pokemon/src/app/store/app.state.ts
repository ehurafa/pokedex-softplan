import { createReducer, on, createAction } from "@ngrx/store";

export interface FavoriteState {
    favorites: Array<number | any>;
}

export const initialState: FavoriteState = {
    favorites: []
}

export const favoritar = createAction('[Favorites] Favoritando...');

export const reducer = createReducer(
    initialState,
    on(favoritar, (state) => {
        state = {
            ...state,
            favorites: [2, 4]
        }
        return state;
    })

)
