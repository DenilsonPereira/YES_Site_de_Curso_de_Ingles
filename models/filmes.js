import {dbPromise} from '../database/db.js';

async function obtemTodosOsFilmes(){
      //Obter os dados do DB
  const db = await dbPromise;

  const filmes = await db.all("SELECT * FROM filmes");
  return filmes;
}

export{ obtemTodosOsFilmes }