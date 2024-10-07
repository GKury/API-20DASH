import Sequelize from 'sequelize';

import Product from '../models/Product';
import EstoqueMinimo from '../models/EstoqueMinimo';

const models = [Product, EstoqueMinimo];

const connection = new Sequelize(/*Config de conexao de um banco de dados PostgreSQL*/);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));