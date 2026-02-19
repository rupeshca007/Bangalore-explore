const express = require('express');
const Blog = require('../models/Blog');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

router.post('/', protect, async (req, res) => {
  const blog = await Blog.create({
    ...req.body,
    author: req.user.id
  });
  res.json(blog);
});

module.exports = router;
