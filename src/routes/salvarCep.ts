import Router from 'express'
import knex from '../database/knex'
import AppError from '../utils/AppError'

const router = Router();

router.post("/", async (req, res, next) => {
    try {
        const objSalvar = req.body;

        console.log(objSalvar)
        // Insere os dados na tabela 'salvarcep'
        await knex('salvarcep').insert(objSalvar);

        res.status(201).json({ message: "salvarcep salvo" });
    } catch (error) {
        next(error); // Passa o erro para o middleware de tratamento de erros
    }
});

router.get("/:cep", async (req, res, next) => {
    try {

        const {cep} =req.params
        const resposta = await knex('salvarcep').where({cep}).select();

        if(resposta.length == 0) return  res.status(404).json({ message: "não a no banco" });

        res.status(200).json({ salvarcep: resposta });
    } catch (error) {
        next(error); // Passa o erro para o middleware de tratamento de erros
    }
});


export default router
