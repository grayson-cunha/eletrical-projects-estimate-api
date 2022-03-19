import { Document, Schema, model, Model, ObjectId } from 'mongoose';
import { productSchema } from './product';

export interface ProductDocument extends Document {
  name: string;
  amount: number;
  quantity: number;
  link: string;
}

export interface EstimateDocument extends Document {
  data: string;
  client: ObjectId;
  products: ProductDocument[];
  amount: number;
  startDate: Date;
  endDate: Date;
}

export type TypeEstimateModel = Model<EstimateDocument>;

export const estimateSchema: Schema<EstimateDocument> =
  new Schema<EstimateDocument>(
    {
      data: {
        type: String,
        required: true,
      },
      client: {
        type: String,
        required: true,
      },
      products: {
        type: [productSchema],
        minlength: 1,
      },
      amount: {
        type: Number,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: false,
      versionKey: false,
    }
  );

export const EstimateModel = model<EstimateDocument, TypeEstimateModel>(
  'Estimate',
  estimateSchema,
  'estimate'
);
