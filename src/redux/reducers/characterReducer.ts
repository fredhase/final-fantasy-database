import { Dispatch } from 'redux';

const INITIAL_STATE = {
    characters: [],
    loading: false,
    home: true,
}

export default function characterReducer(state = INITIAL_STATE, action: any){
    switch(action.type){
        case 'GET_CHARACTER':
            return({
                ...state,
                characters: INITIAL_STATE.characters,
                home: false,
                loading: true,
            });
        
        case 'GET_CHARACTER_SUCCESS':
            return({
                ...state,
                loading: false,
                home: false,
                characters: action.payload.characters,
            });

        case 'SEARCHING_CHARACTER':
            return({
                ...state,
                loading: true,
                home: false,
            });
        
        case 'SEARCH_CHARACTER_SUCCESS':
            return({
                ...state,
                loading: false,
                home: false,
                characters: action.payload.characters,
            });

        default: 
            return state;
    }
}

export function getCharacter(){
    return async function(dispatch: Dispatch) {
        dispatch({
        type: 'GET_CHARACTER',
        payload: {}
        });

        const response = await fetch("https://www.moogleapi.com/api/v1/characters/");
        const allCharacters = await response.json();

        dispatch({
            type: 'GET_CHARACTER_SUCCESS',
            payload: {
                characters: allCharacters,
            }
        });
    }
}

export function searchCharacter(search: string){
    return async function(dispatch: Dispatch){ 
        dispatch({
            type: 'SEARCHING_CHARACTER',
            payload: {},
        });

        const reponse = await fetch("https://www.moogleapi.com/api/v1/characters"+search);
        const foundCharacters = await reponse.json();

        dispatch({
            type: 'SEARCH_CHARACTER_SUCCESS',
            payload: {
                characters: foundCharacters,
            }
        });
    }
}