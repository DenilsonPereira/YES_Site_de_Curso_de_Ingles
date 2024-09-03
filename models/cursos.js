import {dbPromise} from "../database/db.js";

async function obterCursos(){
    //Obter os dados do DB
    const db = await dbPromise;
    const cursos = await db.all("SELECT * FROM cursos");
    return cursos;
}

export {obterCursos}