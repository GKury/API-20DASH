import { Model, DataTypes } from "sequelize";

import EstoqueMinimo from './EstoqueMinimo';

export default class Product extends Model {
  static init(sequelize) {
    super.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: DataTypes.STRING,
        tipo: DataTypes.STRING,
        quantidade: DataTypes.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models){
    this.hasOne(models.EstoqueMinimo, { foreignKey: 'id_produto' });
  }
}
