# My Portfolio Website

A modern, responsive portfolio website built with React.js featuring a clean design and smooth navigation.

## 🚀 Features

- **About Page**: Professional profile with image and personal details
- **Resume Page**: Timeline-based experience and education display
- **Contact Page**: Contact form with Google Maps integration
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Navigation**: Seamless page transitions with active state highlighting
- **Scroll to Top**: User-friendly navigation button
- **Modern UI**: Professional styling with hover effects and animations

## 🛠️ Technologies Used

- React.js 19.1.1
- CSS3 with modern features
- Font Awesome icons
- Google Maps integration
- Responsive design principles

## 📁 Project Structure

```
src/
├── components/
│   ├── Aboutus.js          # About page component
│   ├── Aboutus.css         # About page styles
│   ├── Contact.js          # Contact page component
│   ├── Contact.css         # Contact page styles
│   ├── Resume.js           # Resume page component
│   ├── Resume.css          # Resume page styles
│   ├── Drawer.js           # Navigation sidebar
│   ├── Drawer.css          # Sidebar styles
│   ├── ScrollToTop.js      # Scroll to top button
│   └── ScrollToTop.css     # Button styles
├── App.js                  # Main application component
├── App.css                 # Main application styles
└── index.js                # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Usage

### Navigation
- Use the left sidebar to navigate between pages
- Click on "About", "Resume", or "Contact" to switch pages
- The active page is highlighted in the navigation

### Pages

#### About Page
- View personal information and profile image
- See career statistics and skills
- Professional summary and details

#### Resume Page
- Professional experience timeline
- Education history with CGPA
- Contact information for hiring

#### Contact Page
- Contact form for inquiries
- Contact information with icons
- Google Maps integration
- WhatsApp direct link

### Features
- **Responsive Design**: Automatically adapts to screen size
- **Smooth Transitions**: Page changes with fade-in animations
- **Scroll to Top**: Button appears when scrolling down
- **Form Validation**: Contact form with required field validation
- **Interactive Elements**: Hover effects and smooth animations

## 🎨 Customization

### Colors
The main color scheme uses:
- Primary Blue: `#4a90e2`
- Secondary Blue: `#357abd`
- Dark Text: `#2c3e50`
- Light Background: `#f8f9fa`

### Styling
- All components use CSS modules for scoped styling
- Responsive breakpoints at 768px and 480px
- Modern CSS features like CSS Grid and Flexbox

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with two-column layouts
- **Tablet**: Responsive grid layouts with adjusted spacing
- **Mobile**: Single-column layouts with mobile-optimized navigation

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

### Adding New Pages

1. Create a new component in the `components/` folder
2. Add the page to the navigation in `Drawer.js`
3. Update the `renderContent` function in `App.js`
4. Add corresponding styles

## 🌟 Features to Add

- Portfolio gallery with project showcases
- Blog section for articles
- Dark/Light theme toggle
- Multi-language support
- Contact form backend integration
- Analytics integration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**D.Mithun Jain**
- Email: kishannk11@gmail.com
- Phone: +91 97406 84686
- Location: Bangalore, India

---

Built with ❤️ using React.js
