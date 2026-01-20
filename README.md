# YouTube Clone - A Full-Featured Video Streaming Application

A modern, responsive YouTube clone built with **React**, featuring user authentication, video search, streaming, comments, subscriptions, and more. This project demonstrates advanced React patterns, state management with Redux, and integration with the YouTube API.

## 🎯 Features

- **Google Authentication** - Sign in securely with Google OAuth
- **Video Discovery** - Browse popular videos with category filtering
- **Search Functionality** - Search videos by keywords
- **Video Playback** - Watch videos with embedded YouTube player
- **Video Details** - View statistics, metadata, and descriptions
- **Comments System** - Read and interact with video comments
- **Related Videos** - Discover related content on video watch page
- **Subscriptions** - Subscribe to channels and manage subscriptions
- **Like/Dislike** - React to videos with likes and dislikes
- **Watch History** - Track viewed videos
- **Infinite Scroll** - Load more videos as you scroll
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Loading States** - Skeleton loading for smooth UX

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Redux** - State management
- **Redux Thunk** - Async actions
- **Tailwind CSS** - Utility-first CSS
- **SCSS** - Component styling
- **Material UI** - UI component library

### Backend & APIs
- **YouTube Data API v3** - Video data and streaming
- **Firebase** - Authentication

### Libraries
- **Axios** - HTTP client
- **Moment.js** - Date formatting
- **Numeral.js** - Number formatting
- **React Loading Skeleton** - Skeleton loading screens
- **React Lazy Load Image** - Image optimization

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- YouTube Data API Key ([Get one here](https://developers.google.com/youtube/v3/getting-started))
- Firebase Project ([Setup Firebase](https://firebase.google.com))

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/YoutubeClone.git
cd YoutubeClone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory:
```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

**Important:** Never commit `.env` to version control. It's already in `.gitignore`.

### 4. Configure Firebase
Update `src/firebase.js` with your Firebase project credentials:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Start the development server
```bash
npm start
```
The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `npm start`
Runs the app in development mode with hot reload.

### `npm run build`
Builds the app for production with optimized bundle.

### `npm test`
Launches the test runner in interactive mode.

### `npm run deploy`
Deploys the app to GitHub Pages.

## 📁 Project Structure

```
src/
├── components/
│   ├── header/              # Navigation header with search
│   ├── sidebar/             # Navigation sidebar
│   ├── Video/               # Video card component
│   ├── Videohorizontal/     # Horizontal video listing
│   ├── Comments/            # Comment section
│   ├── CategoryBar/         # Category filter buttons
│   └── screen/              # Page components
│       ├── Screen.jsx       # Home page
│       ├── WatchScreen/     # Video watch page
│       ├── Searchscreen.jsx # Search results
│       ├── ChannelScreen/   # Channel page
│       ├── Subscriptions/   # Subscriptions page
│       └── loginScreen/     # Login page
├── redux/
│   ├── Store.js             # Redux store configuration
│   ├── Actions/             # Action creators
│   └── Reducers/            # Reducer functions
├── api.js                   # Axios API configuration
├── firebase.js              # Firebase configuration
├── App.js                   # Main app component
└── index.js                 # React DOM render
```

## 🔐 Security Considerations

- **API Keys**: Store API keys in `.env` files (never commit to version control)
- **Firebase**: Use Firebase security rules to protect data
- **Authentication**: Implemented with Google OAuth for secure login

## 🎨 UI/UX Highlights

- **Clean Design** - Inspired by YouTube's modern interface
- **Dark Mode Ready** - Easily customizable color scheme
- **Skeleton Loaders** - Smooth loading transitions
- **Infinite Scroll** - Seamless content loading
- **Mobile Optimized** - Touch-friendly interface

## 🔧 Customization

### Change Region Code
Edit `src/redux/Actions/videos_action.js`:
```javascript
regionCode: "US", // Change from "IN" to your region
```

### Modify Colors
Update `src/index.scss` and Tailwind config to match your brand.

### Add More Features
- Playlists
- User profiles
- Video upload
- Direct messaging

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- UI Components from [Material UI](https://mui.com/)
- API by [YouTube Data API](https://developers.google.com/youtube/v3)
- Authentication by [Firebase](https://firebase.google.com/)

## 📧 Contact

For questions and support, please open an issue on the repository.

---

**Happy Coding! 🚀**
