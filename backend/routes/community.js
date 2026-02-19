const express = require('express');
const Community = require('../models/Community');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const communities = await Community.find().sort({ createdAt: -1 });
  res.json(communities);
});

router.post('/', protect, async (req, res) => {
  const community = await Community.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(community);
});

module.exports = router;
