// Os controllers é o cara que faz o papel de receber os parametros
// da requisição do express ou qualquer que seja o serve usado
// E retornar uma resposta para requisição
// Ele que tem acesso ao nosso UseCase que no caso é usado
// para criar um novo usuario

import { Request, Response } from 'express'
import { TCreateUserUseCaseReturn } from './CreateUserUseCase'

type THandleReturn = {
  (resquest: Request, response: Response): Promise<Response>
}
type TCreateUserControllerReturn = {
  handle: THandleReturn
}

const CreateUserController = (
  createUserUseCase: TCreateUserUseCaseReturn
): TCreateUserControllerReturn => {
  return {
    handle: async (resquest, response) => {
      const { name, email, password } = resquest.body

      try {
        await createUserUseCase({
          name,
          email,
          password,
        })

        return response.status(201).send()
      } catch (err) {
        return response.status(400).json({
          message: err.message || 'Unexpected error',
        })
      }
    },
  }
}

export { CreateUserController }
