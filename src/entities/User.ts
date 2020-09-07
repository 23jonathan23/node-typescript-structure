// Onde é implementado a minha entidade ou seja o meu modelo
type TUser = {
  name: string
  email: string
  password: string
}

const User = (args: TUser): TUser => ({
  name: args.name,
  email: args.email,
  password: args.password,
})

export { User, TUser }
