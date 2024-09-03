import { Router } from "express";
import { obterUsuario } from "../models/usuarios.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SENHA_SECRETA = "s3nh@Sup3rs3cr3t@";

const routerUsuarios = Router();

//LOGIN
//admin@admin.com
//admin

routerUsuarios.post("/api/token", (req, res) => {
    const { token } = req.body;
    const isValido = jwt.verify(token, SENHA_SECRETA);

    try{
        if(isValido){
            return res.status(200).json({message: "Token válido"});
        }else{
            return res.status(400).json({message: "Token inválido"});
        }
    }catch{
        return res.status(400).json({message: "Token inválido"});
    }
})

routerUsuarios.post("/api/login", async (req, res) => {
    const {usuario, senha} = req.body;

    const salt = await bcrypt.genSalt(10);
    const senhaHasheada = await bcrypt.hash(senha, salt);

    const u = await obterUsuario(usuario);

    //u -> id = 1, nome = "admin@admin", senha = "admin"
    if(u!= null){
        //Verificar a Senha
        const isMatch = await bcrypt.compare(senha, u.senha);
        if(isMatch){
            //Gerar token
            const token = jwt.sign({usuario}, SENHA_SECRETA, {expiresIn: "10s"});
            return res.status(200).json({token, regraDeAcesso: "Administrador"});
        }else{
            return res.status(401).json({message : "Senha errada"});
        }
    }else{
        return res.status(404).json({message : "Usuário não encontrado"});
    }
})

export {routerUsuarios};