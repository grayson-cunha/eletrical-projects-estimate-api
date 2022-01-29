import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../config/database';

interface CustomerAttributes {
  id: number;
  name: string;
  areaCode: string;
  phoneNumber?: string;
}

export interface CustomerInput extends Optional<CustomerAttributes, 'id'> {}
export interface CustomerOuput extends Required<CustomerAttributes> {}

class Customer extends Model<CustomerAttributes, CustomerInput> implements CustomerAttributes {
  public id!: number;
  public name!: string;
  public areaCode!: string;
  public phoneNumber!: string;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    areaCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
  }
);

export default Customer;
