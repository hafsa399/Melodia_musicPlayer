# 🎵 Music Player

A modern and responsive music player built using **React** and **Vite**. This project allows users to listen to music, search for songs, control playback, and explore different playlists through a clean and user-friendly interface.

This project was created to improve my frontend development skills by working with React components, state management, API integration, and responsive web design.

---

# 📖 About the Project

The Music Player is a web application that lets users enjoy music in a simple and interactive way. It combines locally stored songs with songs fetched from the **Jamendo API**, giving users a better listening experience.

The main goal of this project was to learn how to build a real-world React application by using reusable components, handling audio playback, fetching data from an external API, and creating a responsive user interface.

---

# ✨ Features

* Responsive user interface
* Play and pause songs
* Previous and next song controls
* play on repeat  and shuffle
* Volume control
* Display song information
  * Song title
  * Artist name
  * Album cover
* Trending playlist section
* Featured charts section
* Artist section
* Search functionality
* Music fetched from the Jamendo API
* Local playlist support
* Login and Signup modal
* Clean and modern UI
* Mobile-friendly design

---

# 🛠 Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6+)
* React
* Vite

### Libraries

* React Icons
* Fetch API

### API

* Jamendo API

---

# 📁 Project Structure

```text
src/
│
├── assets/
│   ├── songs/
│   ├── images/
│
├── components/
│   ├── Navbar
│   ├── HeroPlayer
│   ├── Top songs
│   ├── TrendingPlaylist
│   ├── ArtistSection
│   ├── Banner
│   ├── FeaturedCharts
│   ├── Footer
│   └── AuthModal
│
├── pages/
│   └── Home
│
├── App.jsx
├── main.jsx
└── App.css
```

---

# 🎧 Main Features Explained

## Hero Player

The Hero Player is the main music player of the application.

It includes:

* Play and Pause button
* Next and Previous controls
* Volume control
* Album artwork
* Song title
* Artist name

---

## Search

Users can search for songs available through the music collection and API. (it is still in development)

---

## Top Songs

Displays the most popular and trending songs
Shows song title, artist name, and album artwork
One-click playback directly from the song list

---
Features

## Trending Playlist

Displays popular songs in an organized playlist layout.

---

## Artist Section

Shows different artists and helps users discover more music.

---

## Featured Charts

Displays selected songs in a clean card layout.

---

## Authentication Modal

A Login and Signup popup was added to improve the overall user interface and simulate a real music streaming application.

---

# 🌐 API Integration

This project uses the **Jamendo API** to fetch music data.

The API provides:

* Song title
* Artist name
* Album artwork
* Audio URL

Using an external API helped me understand:

* Fetch API
* Asynchronous JavaScript
* Working with JSON data
* Displaying dynamic content in React

---

# 💻 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/music-player.git
```

### 2. Move into the project folder

```bash
cd music-player
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the browser

Visit

```text
http://localhost:5173
```

---

# 🚀 How to Use

1. Open the application.
2. Browse the available songs.
3. Select a song to play.
4. Use the play or pause button to control playback.
5. Skip to the next or previous song.
6. Adjust the volume using the volume slider.
7. Search for songs.
8. Explore artists, trending playlists, and featured charts.

---

# 🧠 What I Learned

During this project I learned:

* Building applications with React
* Creating reusable components
* Managing state with React Hooks
* Using the HTML Audio element
* Working with the Fetch API
* Consuming REST APIs
* Handling asynchronous functions using async/await
* Organizing a React project
* Responsive web design
* Debugging React applications
* Managing assets like images and audio files

---

# ⚠ Challenges Faced

While developing this project, I faced several challenges.

### API Integration

Learning how to fetch music data from the Jamendo API and display it correctly in React.

### Audio Playback

Managing play, pause, next, previous, and volume controls while keeping the UI synchronized with the audio player.

### React State Management

Updating the currently playing song without breaking the user interface.

### Responsive Design

Making the application look good on desktop, tablet, and mobile devices.

### Project Structure

Organizing components into separate folders for better readability and maintainability.

### Debugging

Some common issues included:

* Import path errors
* Missing CSS files
* Incorrect asset paths
* React rendering issues
* API request handling

Fixing these problems improved my debugging skills and understanding of React.

---

# 🔮 Future Improvements

I plan to continue improving this project by adding:

* search through search bar 
* Progress bar with seeking
* Favorite songs
* Create custom playlists
* Recently played songs
* Dark and Light mode
* User authentication with a backend
* User profiles
* Music recommendations
* Lyrics support
* Multiple music APIs as fallback sources
* Better search and filtering
* Loading animations
* Better error handling
* Deploy the application online

---

# 📌 Why I Built This Project

The purpose of this project was to strengthen my frontend development skills by building a real-world application.

Through this project I practiced:

* React development
* Component-based architecture
* API integration
* Audio handling
* Responsive UI design
* Modern JavaScript
* Project organization

This project represents an important step in my journey toward becoming a frontend developer.

---

# 🙋 Author

**Hafsa Nasir**

Computer Science Student

Frontend Developer (Learning React)

Passionate about building responsive and user-friendly web applications.

---

# ⭐ Acknowledgements

* React
* Vite
* Jamendo API
* React Icons

Special thanks to the open-source community for providing the tools and resources that made this project possible.
