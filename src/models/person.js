import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  img: { type: String },
  age: { type: Number },
});

const Person = new mongoose.model('Person', personSchema);

export default Person;
