import mongoose, { Schema } from 'mongoose';

export interface IBrandInfo {
  brand: string;
  descriptionTop: string;
  descriptionBotton: string;
}

const BrandInfoSchema = new Schema<IBrandInfo>(
  {
    brand: { type: String },
    descriptionTop: { type: String },
    descriptionBotton: { type: String },
  },
  {
    timestamps: true,
    collection: 'brandinfos',
  }
);

export default mongoose.models.BrandInfo ||
  mongoose.model<IBrandInfo>('BrandInfo', BrandInfoSchema);
