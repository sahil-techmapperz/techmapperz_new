import mongoose from 'mongoose';

const Recent_login_Schema = new mongoose.Schema({
  email: { type: String },
  loginTime: { type: String },
});

const RecentLogin = mongoose.models.Recent_login || mongoose.model('Recent_login', Recent_login_Schema);
export default RecentLogin;

