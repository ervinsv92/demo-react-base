/**
 * 
 * @param {*} state {uid:'asdasd',name:'Ervin'}
 * @param {*} action 
 */

 import { types } from "../types/types";

const initialState = {
    aumentarEn:1,
    contador:0
}

 export const contadorReducer = (state = initialState, action)=>{
     switch (action.type) {
        case types.contadorSumar:
             return {
                 ...state,
                 contador: state.contador + state.aumentarEn
             }
        case types.contadorRestar:
            return {
                ...state,
                contador: state.contador - state.aumentarEn
            }
        case types.setAumentarEn:
            return {
                ...state,
                aumentarEn: action.payload
            }
         default:
             return state;
     }
 }