import {dbPromise} from "../database/db.js";

async function obterContato(){
    //Obter os dados do DB
    const db = await dbPromise;
    const contato = await db.all("SELECT * FROM contato");
    return contato;
}

export {obterContato}