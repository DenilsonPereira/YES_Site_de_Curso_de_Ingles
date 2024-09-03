import { dbPromise } from "../database/db.js";

async function obterUsuario(nome){
    const db = await dbPromise;

    const usuario = await db.get("SELECT * FROM usuarios WHERE nome = ?", [nome])
    return usuario;
}

export {obterUsuario};