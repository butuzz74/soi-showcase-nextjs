import mongoose, { Schema, Document } from 'mongoose';

export interface IAdmin extends Document {
  email: string;
  password: string;
  role: string;  
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    role: { type: String, default: "admin" },    
  },
  {
    timestamps: true, 
    collection: 'admins', 
  }
);

export default mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);