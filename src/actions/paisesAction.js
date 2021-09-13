import { types } from "../types/types";
import { nanoid } from 'nanoid'

export const getPaises = ()=>{
    return async (dispatch) =>{
        console.log("ini");
        const dataJson = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await dataJson.json();
        let paises= [];
        if(data){
            paises = data.map((pais)=>{
                return {
                    id: nanoid(),
                    name:pais.name,
                    capital:pais.capital,
                    region:pais.region,
                    population:pais.population,
                    area:pais.area
                }
            })
        }

        dispatch(setPaises(paises));
    }
}

export const setPaises= (paises)=>({ type: types.setPaises, payload:paises});

export const setPais= (pais)=>({ type: types.setPais, payload:pais});