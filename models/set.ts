import mongoose, { Schema } from 'mongoose';

export interface ISet {
    brand: string;
    type: string;
    model: string;
    price: number;
    description: string;
    image: string;    
    access: boolean;    
}

const SetSchema = new Schema<ISet>(
  {
    brand: { type: String },
    type: { type: String},
    model: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },    
    access: {type: Boolean, default: true },
  },
  {
    timestamps: true,
    collection: 'sets',
  }
);

export default mongoose.models.Set ||
  mongoose.model<ISet>('Set', SetSchema);
