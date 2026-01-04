# News Aggregator

A modern, responsive news aggregator web application built with React frontend and Node.js backend. Browse news by categories or search for specific topics using real-time data from NewsAPI.

## 🚀 Features

- **Category Browsing**: Browse news by categories (General, Business, Entertainment, Health, Science, Sports, Technology)
- **Search Functionality**: Search for specific news topics
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Data**: Fetches live news from NewsAPI
- **Modern UI**: Clean, card-based layout with smooth animations
- **Fast Loading**: Optimized for performance

## 🛠️ Technologies Used

### Frontend
- **React** - JavaScript library for building user interfaces
- **CSS3** - Modern styling with responsive design
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Axios** - HTTP client for external API calls
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

## 📋 Prerequisites

Before running this application, make sure you have:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **NewsAPI Key** (free from [newsapi.org](https://newsapi.org))

## 🔧 Installation & Setup

### 1. Clone or Download the Project
```bash
cd /path/to/your/projects
# If cloning from git
git clone <repository-url>
cd news-aggregator
```

### 2. Get Your NewsAPI Key
1. Visit [newsapi.org](https://newsapi.org)
2. Sign up for a free account
3. Get your API key from the dashboard

### 3. Configure Environment Variables
1. Open the `.env` file in the root directory
2. Replace `your_news_api_key_here` with your actual NewsAPI key:
```env
NEWS_API_KEY=your_actual_api_key_here
PORT=3000
```

### 4. Install Dependencies

**Backend Dependencies:**
```bash
npm install
```

**Frontend Dependencies:**
```bash
cd frontend
npm install
cd ..
```

## 🚀 Running the Application

### Development Mode
1. **Start the Backend Server:**
```bash
npm start
```
The backend will run on `http://localhost:3000`

2. **Start the Frontend (in a new terminal):**
```bash
cd frontend
npm start
```
The frontend will run on `http://localhost:3001`

3. **Open your browser** and go to `http://localhost:3001`

### Production Mode
```bash
# Build the frontend
cd frontend
npm run build

# The built files will be in frontend/build/
# You can serve them with any static file server
```

## 📡 API Endpoints

### Backend API (Port 3000)

| Endpoint | Method | Description | Query Parameters |
|----------|--------|-------------|------------------|
| `/api/news` | GET | Get top headlines | `country=us`, `category=general` |
| `/api/news/search` | GET | Search news articles | `q=search_term` |
| `/api/health` | GET | Health check | - |

### Example API Calls

```bash
# Get general news from US
curl "http://localhost:3000/api/news"

# Get technology news
curl "http://localhost:3000/api/news?category=technology"

# Search for AI news
curl "http://localhost:3000/api/news/search?q=artificial%20intelligence"
```

## 📁 Project Structure

```
news-aggregator/
├── server.js              # Backend server
├── package.json           # Backend dependencies
├── .env                   # Environment variables
├── README.md              # This file
└── frontend/
    ├── public/
    │   ├── index.html     # Main HTML file
    │   └── manifest.json  # PWA manifest
    ├── src/
    │   ├── App.js         # Main React component
    │   ├── App.css        # Main styles
    │   ├── index.js       # React entry point
    │   └── ...            # Other React files
    └── package.json       # Frontend dependencies
```

## 🎨 Customization

### Changing Categories
Edit the `categories` array in `frontend/src/App.js`:

```javascript
const categories = [
  { value: 'general', label: 'General' },
  { value: 'business', label: 'Business' },
  // Add more categories...
];
```

### Styling
Modify `frontend/src/App.css` to customize the appearance:
- Change colors, fonts, and layout
- Adjust responsive breakpoints
- Modify animations and transitions

### API Configuration
Update `server.js` to:
- Change default country
- Add more API endpoints
- Modify error handling

## 🔒 Security Notes

- Never commit your `.env` file to version control
- Keep your NewsAPI key secure
- The free NewsAPI tier has rate limits (100 requests/day)
- Consider upgrading to a paid plan for production use

## 🐛 Troubleshooting

### Common Issues:

1. **"Failed to fetch news" error**
   - Check your NewsAPI key in `.env`
   - Verify the key is valid and not expired
   - Check your internet connection

2. **Port already in use**
   - Kill processes using ports 3000 or 3001
   - Or change ports in `.env` and `frontend/package.json`

3. **CORS errors**
   - Ensure both servers are running
   - Check that CORS is properly configured in `server.js`

4. **React app not loading**
   - Clear browser cache
   - Try `npm install` in frontend directory
   - Check for console errors in browser dev tools

## 📝 Development

### Adding New Features
1. Backend changes: Modify `server.js`
2. Frontend changes: Edit files in `frontend/src/`
3. Test both servers after changes

### Code Style
- Use ES6+ syntax
- Follow React best practices
- Keep components modular and reusable

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the console logs for error messages
3. Ensure all dependencies are installed correctly

---

**Happy coding! 🎉**</content>
<parameter name="filePath">/Users/adamaljaaouni/Desktop/Codin Practice/news-aggregator/README.md