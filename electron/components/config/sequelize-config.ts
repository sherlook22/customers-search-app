import {Sequelize} from 'sequelize-typescript';
import path from 'path';

export const sequelize =  new Sequelize({
  dialect: 'sqlite',
  storage: __dirname.substring(0, __dirname.indexOf(path.basename(__dirname)) - 1) + '/customers-search.sqlite',
  models: [__dirname.substring(0, __dirname.indexOf(path.basename(__dirname)) - 1) + '/**/*.model.js'],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
});
