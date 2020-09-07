// Aqui é onde de fato fica a implementação do repositorio em questão
// No caso simulamos um postgres porem sem conexão com DB de verdade
// Cada repositorio por exemplo um MySQLUsersRepository ficaria em um
// outro arquivo com esse nome

import { IUsersRepository } from 'repositories/IUsersRepository'
import { TUser } from 'entities/User'

// Usado para armazenar os usuarios criados (teste)
const users: TUser[] = []

const findByEmail = async (email: string): Promise<TUser> => {
  const user = users.find(user => user.email === email)

  return user
}

const save = async (user: TUser): Promise<void> => {
  users.push(user)
}

const PostgresUsersRepository: IUsersRepository = {
  findByEmail,
  save,
}

export { PostgresUsersRepository }
