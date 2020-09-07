// Aqui é onde conectamos as camadas
// no caso as implementações do repositories
// são passadas para o nosso useCase

import { CreateUserUseCase } from './CreateUserUseCase'
import { PostgresUsersRepository } from 'repositories/implementations/PostgresUsersRepository'
import { CreateUserController } from './CreateUserController'

const createUserUseCase = CreateUserUseCase(PostgresUsersRepository)

const createUserController = CreateUserController(createUserUseCase)

export { createUserController }
