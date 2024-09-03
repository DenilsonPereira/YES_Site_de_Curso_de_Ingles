import {Router} from 'express';
import {obtemTodosOsFilmes} from '../models/filmes.js';

const routerFilmes = Router();

routerFilmes.get("/api/filmes", async ( _ , resposta) => {
  const filmes = await obtemTodosOsFilmes();
  //Encaminhar os dados ao cliente
    return resposta.status(200).json(filmes);
});

export {routerFilmes}