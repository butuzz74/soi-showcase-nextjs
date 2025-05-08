import mongoose, { Schema, Document } from 'mongoose';

export interface IProjector extends Omit<Document, 'model'> {
  brand: string;
  type: string;
  model: string;
  price: number;
  description: string;
  image: string;
  brightness: number;
  access: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectorSchema = new Schema<IProjector>(
  {
    brand: { type: String },
    type: { type: String},
    model: { type: Schema.Types.String },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    brightness: { type: Number },
    access: {type: Boolean, default: true },
  },
  {
    timestamps: true, 
    collection: 'projectors', 
  }
);

export default mongoose.models.Projector || mongoose.model<IProjector>('Projector', ProjectorSchema);

