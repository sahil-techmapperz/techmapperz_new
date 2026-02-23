import mongoose from 'mongoose';

const LoginSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

const Login = mongoose.models.Admin_data || mongoose.model('Admin_data', LoginSchema);
export default Login;

