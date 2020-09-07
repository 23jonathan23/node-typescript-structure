// Esse é nosso Data Object Transfer - define qual o formado do dado que será
// usado quando vamos transferir um object de uma camada para outra
// por exemplo de useCase para repositories (domain para infra)
export interface ICreateUserRequestDTO {
  name: string
  email: string
  password: string
}
