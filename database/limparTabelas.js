import { dbPromise } from "./db.js";
import bcrypt from "bcrypt";

const senhaCriptografada = await bcrypt.hash("admin", 10);

async function limparTabelas(){
    const db = await dbPromise;

    // await db.run(`DELETE FROM cursos`);

    // await db.run(`DELETE FROM contato`);
    
    // await db.run(`DELETE FROM duvidas`);

    await db.run(`INSERT INTO usuarios (nome, senha) VALUES (?, ?)`, ["admin@admin.com", senhaCriptografada]);
    
}

limparTabelas();