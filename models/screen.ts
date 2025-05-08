import mongoose, { Schema } from 'mongoose';

export interface IScreen {
    brand: string;
    type: string;
    model: string;
    price: number;
    description: string;
    image: string;    
    access: boolean;    
}

const ScreenSchema = new Schema<IScreen>(
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
    collection: 'displays',
  }
);

export default mongoose.models.Screen ||
  mongoose.model<IScreen>('Screen', ScreenSchema);