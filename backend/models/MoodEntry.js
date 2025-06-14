const mongoose = require('mongoose');
const MoodEntrySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  date: Date,
  text: String,
  voiceUrl: String,
  emotion: String,
  sentimentScore: Number,
  triggers: [String],
  suggestions: [String],
  habits: Object
});
module.exports = mongoose.model('MoodEntry', MoodEntrySchema);
