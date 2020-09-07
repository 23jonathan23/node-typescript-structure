// Basicamente o dominio da minha aplicação ou seja regra de negocio da
// aplicação, o cara responsavél por criar o usuario nesse caso
import { IUsersRepository } from 'repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import { User } from 'entities/User'

type TCreateUserUseCaseReturn = {
  (data: ICreateUserRequestDTO): Promise<void>
}

const CreateUserUseCase = (usersRepository: IUsersRepository) => {
  return async (data: ICreateUserRequestDTO): Promise<void> => {
    const userAlreadyExists = await usersRepository.findByEmail(data.email)

    if (userAlreadyExists) throw new Error('User already exists')

    const user = User(data)

    await usersRepository.save(user)
  }
}

export { CreateUserUseCase, TCreateUserUseCaseReturn }
