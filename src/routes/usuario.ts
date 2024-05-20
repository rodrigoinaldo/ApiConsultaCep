import Router from 'express'
import knex from '../database/knex'
import AppError from '../utils/AppError';

const router = Router();

router.post("/", async (req, res) => {
    const objSalvar = req.body;

    if (!objSalvar?.senha) {

        throw new AppError("Senha Obrigatoria")
    }

    // Promise - async
    const id_usuario = await knex('usuarios').insert(objSalvar)

    const usuarios = await knex('usuarios')
        .where({ id: id_usuario[0] })

    res.json({ usuarios: usuarios })
})

router.get("/", (req, res) => {
    knex('usuarios').then((resposta) => {


        res.json({ usuarios: resposta })
    })


})


export default router
