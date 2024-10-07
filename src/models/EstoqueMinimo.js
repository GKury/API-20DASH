import { Model, DataTypes } from "sequelize";

export default class EstoqueMinimo extends Model {
  static init(sequelize) {
    super.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        id_produto: { 
            type: DataTypes.INTEGER,
            references: {
                model: 'Products',
                key: 'id'
            }
        },
        quantidade_minima: DataTypes.INTEGER
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models){
    this.belongsTo(models.Product, { foreignKey: 'id_produto' });
  }
}
