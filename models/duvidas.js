import {dbPromise} from "../database/db.js";

async function obterDuvidas(){
    //Obter os dados do DB
    const db = await dbPromise;
    const duvidas = await db.all("SELECT * FROM duvidas");
    return duvidas;
}

export {obterDuvidas}