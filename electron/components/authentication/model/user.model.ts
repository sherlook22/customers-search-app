import { Optional } from 'sequelize'
import { Table, Model } from 'sequelize-typescript'

interface UserAttributes {
  id: number
  name: string
  username: string
  password: string
  igUsername: string
  igPassword: string
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
export class User extends Model<UserAttributes, UserCreationAttributes> {
  
}
