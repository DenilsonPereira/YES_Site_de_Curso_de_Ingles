import express from "express";
import cors from "cors";
import { routerCursos } from "./routes/cursos.js";
import { routerDuvidas } from "./routes/duvidas.js";
import { routerContato } from "./routes/contato.js";
import {routerUsuarios} from "./routes/usuarios.js";

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(routerCursos);
app.use(routerDuvidas);
app.use(routerContato);
app.use(routerUsuarios);

const porta = 3000;

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));