const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  title: String,
  description: String,
  fullDescription: String,
  joined: { type: Boolean, default: false },
  links: [{ label: String, url: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Community', CommunitySchema);
