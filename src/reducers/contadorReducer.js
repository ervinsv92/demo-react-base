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

 export const authReducer = (state = initialState, action)=>{
     switch (action.type) {
         case types.contadorSumar:
             return {
                 ...state,
                 contador: contador + aumentarEn
             }
        case types.contadorRestar:
        return {
            ...state,
            contador: contador - aumentarEn
        }
         default:
             return state;
     }
 }