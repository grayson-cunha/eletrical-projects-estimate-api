import { Document, Schema, model, Model } from 'mongoose';

export interface ClientDocument extends Document {
  name: string;
  areaCode: string;
  phoneNumber: string;
}

export type TypeClientModel = Model<ClientDocument>;

export const clientSchema: Schema<ClientDocument> = new Schema<ClientDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    areaCode: {
      type: String,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

export const ClientModel = model<ClientDocument, TypeClientModel>(
  'Client',
  clientSchema,
  'client'
);
