# App Development Hero Section - React Component

A modern, responsive React component replicating a mobile app development company's hero section with navigation, phone mockups, and call-to-action elements.

## Features

- ✨ Modern gradient background with wave design
- 📱 Interactive phone mockup with app preview
- 🎨 Responsive navigation bar
- 🔘 Call-to-action button
- ⬅️➡️ Slider navigation controls
- 📱 Fully responsive design (mobile, tablet, desktop)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── HeroSection.js      # Main hero component
│   └── HeroSection.css     # Styling for hero section
├── App.js                  # Main app component
├── App.css                 # Global app styles
├── index.js                # React entry point
└── index.css               # Global styles

public/
└── index.html              # HTML template
```

## Component Usage

```jsx
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
    </div>
  );
}
```

## Customization

### Colors
The main colors can be customized in `HeroSection.css`:
- Primary Red: `#e74c3c`, `#c0392b`
- Dark Blue: `#1a1a2e`, `#16213e`, `#0f3460`
- Accent Blue: `#3498db`

### Navigation Items
Edit the navigation menu in `HeroSection.js`:
```jsx
<ul className="nav-menu">
  <li className="nav-item active">HOME</li>
  <li className="nav-item">About</li>
  // Add or modify items here
</ul>
```

### Content
Modify the hero text in `HeroSection.js`:
```jsx
<h1 className="hero-title">
  Your Title Here
</h1>
<p className="hero-subtitle">
  Your subtitle here
</p>
```

## Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite

## Technologies Used

- React 18.2.0
- CSS3 (Grid, Flexbox, Gradients)
- React Hooks (useState)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

Created based on AcqicodePro Inc. landing page design
