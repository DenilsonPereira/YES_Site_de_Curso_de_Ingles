import { dbPromise } from "./db.js";

async function criarTabelas(){
    const db = await dbPromise;

    await db.run(`CREATE TABLE IF NOT EXISTS cursos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        img TEXT,
        titulo TEXT,
        descricao TEXT
    )`);

    await db.run(`CREATE TABLE IF NOT EXISTS duvidas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT,
        response TEXT
    )`);
    
    await db.run(`CREATE TABLE IF NOT EXISTS contato(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            nome TEXT NOT NULL,
            telefone TEXT NOT NULL,
            mensagem TEXT NOT NULL
        )`);

        await db.run(`CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT UNIQUE NOT NULL,
            senha TEXT NOT NULL
        )`);
    
}

criarTabelas();