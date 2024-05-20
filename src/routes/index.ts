import { Router } from "express"

import usuario from './usuario'
import salvarCep from './salvarCep'

const routes = Router()

routes.use('/salvarCep', salvarCep)
routes.use('/usuarios', usuario)

export default routes
