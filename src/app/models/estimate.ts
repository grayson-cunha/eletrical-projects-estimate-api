import { Document, Schema, model, Model, ObjectId } from 'mongoose';

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
      },
      products: {
        type: [],
        required: true,
      },
      amount: {
        type: Number,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
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
