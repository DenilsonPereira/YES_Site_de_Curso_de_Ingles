import { Router } from "express";
import {obterDuvidas} from "../models/duvidas.js";

const routerDuvidas = Router();

routerDuvidas.get("/api/duvidas", async( _ , resposta) => {
    const duvidas = await obterDuvidas();

    //Encaminhar os dados ao cliente
    return resposta.status(200).json(duvidas);
});

export {routerDuvidas}