import mongoose, { Schema } from 'mongoose';

export interface ICommutation {
    brand: string;
    type: string;
    model: string;
    price: number;
    description: string;
    image: string;    
    access: boolean;    
}

const CommutationSchema = new Schema<ICommutation>(
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
    collection: 'commutations',
  }
);

export default mongoose.models.Commutation ||
  mongoose.model<ICommutation>('Commutation', CommutationSchema);


