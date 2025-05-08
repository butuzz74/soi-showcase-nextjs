import mongoose, { Schema } from 'mongoose';

export interface IDisplay {
    brand: string;
    type: string;
    model: string;
    price: number;
    description: string;
    image: string;
    brightness: number;
    access: boolean;    
}

const DisplaySchema = new Schema<IDisplay>(
  {
    brand: { type: String },
    type: { type: String},
    model: { type: String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    brightness: { type: Number },
    access: {type: Boolean, default: true },
  },
  {
    timestamps: true,
    collection: 'displays',
  }
);

export default mongoose.models.Display ||
  mongoose.model<IDisplay>('Display', DisplaySchema);
