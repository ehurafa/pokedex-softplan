import { createReducer, on, createAction, props} from "@ngrx/store";

export interface Comment {
    id: number | string,
    title: string,
    description: string
}

export interface PokemonState {
    pokemon: {
        favorites: Array<number | any>;
        comments?: Array<Comment> | any;
    }
}

export const initialState: PokemonState = {
    pokemon: {
        favorites: [], 
        comments: []
    }
}

export const addFavorite = createAction('[Favorites] Add favorite...',
                                        props<{ id: number }>()
)

export const removeFavorite = createAction('[Favorites] Removing favorite...',
                                        props<{ id: number }>()
)

export const addComment = createAction('[Comments] Add comment...',
                                        props<{ comment: any }>()
)

export const reducer = createReducer(
    initialState,
    on(addFavorite, (state, { id }) => {
        state = {
            ...state,
            pokemon: {
                favorites: [...state.pokemon.favorites, id]
            }
            
        }
        return state;
    }),
    on(removeFavorite, (state, { id }) => {
        const arr = state.pokemon.favorites.filter(res => res != id )
        state = {
            ...state,
            pokemon: { favorites: [arr] }
        }
        return state;
    }),
    on(addComment, (state, { comment }) => {
        const { favorites, comments } = state.pokemon;

        state = {
            ...state,
            pokemon: {
                favorites,
                comments: [...comments, comment]
            }
        }
        return state;
    })

)
