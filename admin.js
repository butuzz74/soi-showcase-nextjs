// import mongoose, { Schema } from 'mongoose';
const {mongoose, Schema} = require("mongoose")

const AdminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'admin' },
  },
  { timestamps: true }
);
const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin
