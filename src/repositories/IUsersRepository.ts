// interface é um contrato que define uma estrutura a ser seguida pela
// function, class etc que a implemente.
// O I no inicio do nome do arquivo é um padrão de nomenclaruta usado
// no typescript para indicar que é um arquivo referente a interface
import { TUser } from 'entities/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<TUser>
  save(user: TUser): Promise<void>
}
