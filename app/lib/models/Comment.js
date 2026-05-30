import mongoose from 'mongoose';

const ReplySchema = new mongoose.Schema({
  content: String,
  name: String,
  email: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const CommentSchema = new mongoose.Schema({
  content: String,
  name: String,
  email: String,
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogPost',
  },
  replies: [ReplySchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
export default Comment;

