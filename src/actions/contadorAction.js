import { types } from "../types/types";

export const contadorSumar = ()=>({ type: types.contadorSumar})
export const contadorRestar = ()=>({ type: types.contadorRestar})
export const setAumentarEn= (aumentarEn)=>({ type: types.setAumentarEn, payload:aumentarEn})

