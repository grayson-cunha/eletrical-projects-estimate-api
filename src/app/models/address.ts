import { Document, Schema, model, Model } from 'mongoose';

export interface AddressDocument extends Document {
  address: string;
  address2: string;
  number: string;
  district: string;
  city: string;
  state: string;
  cep: string;
  country: string;
}

export type TypeAddressModel = Model<AddressDocument>;

export const addressSchema: Schema<AddressDocument> =
  new Schema<AddressDocument>(
    {
      address: {
        type: String,
      },
      address2: {
        type: String,
      },
      number: {
        type: String,
      },
      district: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      cep: {
        type: String,
      },
      country: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: false,
      versionKey: false,
    }
  );

export const AddressModel = model<AddressDocument, TypeAddressModel>(
  'Address',
  addressSchema,
  'address'
);
