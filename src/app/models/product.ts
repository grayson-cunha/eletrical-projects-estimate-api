import { Document, Schema, model, Model } from 'mongoose';

export interface Product extends Document {
  name: string;
  amount: number;
  quantity: number;
  link: string;
}

export interface ProductDocument extends Document {
  name: string;
  amount: number;
  quantity: number;
  link: string;
}

export type TypeProductModel = Model<ProductDocument>;

export const productSchema: Schema<ProductDocument> =
  new Schema<ProductDocument>(
    {
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
    {
      _id: false,
      timestamps: false,
      versionKey: false,
    }
  );

export const ProductModel = model<ProductDocument, TypeProductModel>(
  'Product',
  productSchema,
  'product'
);
