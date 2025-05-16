import mongoose, { Schema } from 'mongoose';

export interface IBracket {
    brand: string;
    type: string;
    model: string;
    price: number;
    description: string;
    image: string;    
    access: boolean;    
}

const BracketSchema = new Schema<IBracket>(
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
    collection: 'brackets',
  }
);

export default mongoose.models.Bracket ||
  mongoose.model<IBracket>('Bracket', BracketSchema);
