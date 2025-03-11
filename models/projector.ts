
import mongoose, { Schema, Document } from 'mongoose';

export interface IProjector extends Omit<Document, 'model'> {
  brand: string;
  type: string;
  model: string;
  price: string;
  description: string;
  image: string;
  brightness: string;
  access: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectorSchema = new Schema<IProjector>(
  {
    brand: { type: String },
    type: { type: String},
    model: { type: Schema.Types.String },
    price: { type: String },
    description: { type: String },
    image: { type: String },
    brightness: { type: String },
    access: { type: String },
  },
  {
    timestamps: true, 
    collection: 'projectors', 
  }
);

export default mongoose.models.Projector || mongoose.model<IProjector>('Projector', ProjectorSchema);

