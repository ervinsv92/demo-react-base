/**
 * 
 * @param {*} state {uid:'asdasd',name:'Ervin'}
 * @param {*} action 
 */

 import { types } from "../types/types";

const initialState = {
    paises:[],
    pais:{
        id:0,
        name:'',
        capital:'',
        region:'',
        population:'',
        area:''
    }
}

 export const paisesReducer = (state = initialState, action)=>{
     switch (action.type) {
        case types.setPaises:
             return {
                 ...state,
                 paises: action.payload
             }
        case types.setPais:
            return {
                ...state,
                pais: action.payload
            }
         default:
             return state;
     }
 }