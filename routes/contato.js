import { Router } from "express";
import { dbPromise } from "../database/db.js";
import {obterContato} from "../models/contato.js";

const routerContato = Router();

routerContato.post("/api/contato", async (req, res) => {

    const { email, nome, telefone, mensagem } = req.body;

    if (!email || !nome || !telefone || !mensagem) {
        console.log("Campos faltando:", { email, nome, telefone, mensagem });
        return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }

    try {
        const db = await dbPromise;
        await db.run(`INSERT INTO contato (email, nome, telefone, mensagem) VALUES (?, ?, ?, ?)`,
            [email, nome, telefone, mensagem]);
        res.status(200).json({ message: "Mensagem enviada com sucesso!" });
    } catch (error) {
        console.error("Erro no banco de dados:", error);
        res.status(500).json({ message: "Erro ao enviar mensagem!", error });
    }
});

routerContato.get("/api/contato", async ( _ , resposta) => {
    const contato = await obterContato();

    return resposta.status(200).json(contato);
});

export { routerContato };
