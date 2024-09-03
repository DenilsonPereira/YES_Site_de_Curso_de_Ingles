import { Router } from "express";
import {obterCursos} from "../models/cursos.js";

const routerCursos = Router();

routerCursos.get("/api/cursos", async( _ , resposta) => {
    const cursos = await obterCursos();

    //Encaminhar os dados ao cliente
    return resposta.status(200).json(cursos);
});

export {routerCursos}