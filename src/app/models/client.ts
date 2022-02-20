import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../config/database';

interface ClientAttributes {
  id: number;
  name: string;
  areaCode: string;
  phoneNumber?: string;
}

export interface ClientInput extends Optional<ClientAttributes, 'id'> {}
export interface ClientOuput extends Required<ClientAttributes> {}

class Client
  extends Model<ClientAttributes, ClientInput>
  implements ClientAttributes
{
  public id!: number;
  public name!: string;
  public areaCode!: string;
  public phoneNumber!: string;
}

Client.init(
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

export default Client;
