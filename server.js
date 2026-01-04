require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// NewsAPI configuration (replace with your API key)
const NEWS_API_KEY = process.env.NEWS_API_KEY || 'YOUR_NEWS_API_KEY_HERE';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

// Route to get top headlines
app.get('/api/news', async (req, res) => {
  try {
    const { country = 'us', category = 'general' } = req.query;
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country,
        category,
        apiKey: NEWS_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Route to search news
app.get('/api/news/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Query parameter q is required' });
    }
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q,
        apiKey: NEWS_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error searching news:', error);
    res.status(500).json({ error: 'Failed to search news' });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'News Aggregator Backend is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});