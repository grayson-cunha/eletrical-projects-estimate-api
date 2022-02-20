import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../../config/database';

interface AddressAttributes {
  id: number;
  address: string;
  address2: string;
  number: string;
  district: string;
  city: string;
  state: string;
  cep: string;
  country: string;
}

export interface AddressInput
  extends Optional<AddressAttributes, 'id' | 'country'> {}
export interface AddressOutput extends AddressAttributes {}

class Address
  extends Model<AddressAttributes, AddressInput>
  implements AddressAttributes
{
  public id!: number;
  public address!: string;
  public address2!: string;
  public number!: string;
  public district!: string;
  public city!: string;
  public state!: string;
  public cep!: string;
  public country!: string;
}

Address.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: 'Brasil',
    },
  },
  {
    timestamps: false,
    sequelize: sequelizeConnection,
  }
);

export default Address;
