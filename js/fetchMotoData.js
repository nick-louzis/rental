import { motoData } from "./motoData.js";

export async function fetchMotoData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(motoData);
        }, 1000); 
    });
}