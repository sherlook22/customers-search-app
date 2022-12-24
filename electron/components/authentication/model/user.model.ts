import { BIGINT, Optional, STRING } from 'sequelize'
import { Table, Model, Column, DataType, AutoIncrement, PrimaryKey } from 'sequelize-typescript'

@Table({
  timestamps: false,
  tableName: 'users'
})
export class User extends Model<any, any> {
  @Column({
    type: BIGINT,
    primaryKey: true,
    autoIncrement: true
  })
  id: number;
  @Column({
    type: STRING,
    unique: true
  })
  username: string;
  @Column({
    type: STRING,
  })
  password: string;
}
