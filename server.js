require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);      // User-related routes
app.use('/api/posts', postRoutes);      // Post-related routes
app.use('/api/comments', commentRoutes); // Comment-related routes

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error('MongoDB connection error:', err));
