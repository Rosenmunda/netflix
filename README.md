# Raagflix
<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, responsive Netflix clone application built with React, Vite, and Tailwind CSS. Stream your favorite content with a sleek UI inspired by Netflix.

[Live Demo](#-live-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 🎬 Live Demo

**[View Live Application]([https://netflix-clone-render.onrender.com](https://netflix-anurag1.onrender.com/))**

The application is deployed on Render and is ready to use. Check out the live demo to experience the full Netflix clone experience!

---

## ✨ Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and intuitive interface inspired by Netflix
- **Fast Performance**: Optimized with Vite for lightning-fast load times
- **Component-Based Architecture**: Built with React for maintainable and scalable code
- **State Management**: Uses Zustand for efficient state management
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Smooth Animations**: React Hot Toast for interactive notifications
- **Video Player Integration**: React Player for seamless video playback
- **HTTP Requests**: Axios for reliable API communication
- **Icon Library**: Lucide React for beautiful, consistent icons
- **Client-Side Routing**: React Router DOM for smooth navigation

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0 - A JavaScript library for building user interfaces
- **Vite** 6.2.0 - Next generation frontend tooling
- **Tailwind CSS** 3.4.17 - Utility-first CSS framework
- **React Router DOM** 7.4.0 - Client-side routing
- **Zustand** 5.0.3 - Lightweight state management

### Media & UI
- **React Player** 2.16.0 - Video player component
- **Lucide React** 0.483.0 - Icon library
- **React Hot Toast** 2.5.2 - Notification system
- **Axios** 1.8.4 - HTTP client

### Development Tools
- **ESLint** 9.21.0 - Code linting
- **PostCSS** 8.5.3 - CSS post-processor
- **Autoprefixer** 10.4.21 - CSS vendor prefixing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Rosenmunda/netflix.git
cd netflix
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Navigate to Frontend Directory

```bash
cd frontend
npm install
```

---

## 🚀 Usage

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Check for code quality issues:

```bash
npm run lint
```

### Build CSS (Tailwind)

Build Tailwind CSS styles:

```bash
npm run build:css
```

---

## 📁 Project Structure

```
netflix/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS and Tailwind styles
│   │   ├── store/           # Zustand store (state management)
│   │   ├── utils/           # Utility functions and helpers
│   │   └── App.jsx          # Main App component
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                  # Backend services (if applicable)
├── node_modules/            # Project dependencies
├── package.json             # Root package configuration
├── package-lock.json        # Dependency lock file
└── README.md               # Project documentation
```

---

## 🌐 Environment Variables

Create a `.env` file in the frontend directory:

```bash
VITE_API_URL=https://your-api-endpoint.com
VITE_API_KEY=your_api_key_here
```

Refer to `.env.example` for all available environment variables.

---

## 🧪 Testing

Currently, the project supports linting. To add testing:

```bash
npm run lint
```

To implement unit tests, you can integrate Jest or Vitest.

---

## 📈 Performance Optimizations

- **Code Splitting**: Vite automatically handles code splitting
- **Lazy Loading**: Components are lazy-loaded where applicable
- **Image Optimization**: Tailwind CSS utility optimization
- **Tree Shaking**: Unused code is automatically removed in production builds

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/netflix.git
cd netflix
```

### 3. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 4. Make Your Changes

Implement your feature or fix bugs. Ensure code quality:

```bash
npm run lint
```

### 5. Commit Your Changes

```bash
git commit -m "feat: add your feature description"
```

Use conventional commit messages:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting
- `refactor:` for code restructuring

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request

Open a Pull Request on GitHub with a clear description of your changes.

### Code Guidelines

- Follow ESLint rules
- Write clean, readable code
- Add comments for complex logic
- Keep components small and focused
- Use meaningful variable names

---

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port.

### Dependencies Issues

Clear node_modules and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Failures

Ensure you're using Node.js v14+:

```bash
node --version
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses

All dependencies used in this project are listed in `package.json` with their respective licenses. Most are MIT or compatible open-source licenses.

---

## 👨‍💻 Author

**Rosenmunda**
- GitHub: [@Rosenmunda](https://github.com/Rosenmunda)
- Project: [netflix](https://github.com/Rosenmunda/netflix)

---

## 💬 Support

If you encounter any issues or have questions:

1. **Check Existing Issues**: Search [GitHub Issues](https://github.com/Rosenmunda/netflix/issues)
2. **Create New Issue**: [Open an issue](https://github.com/Rosenmunda/netflix/issues/new)
3. **Discussion**: Use [GitHub Discussions](https://github.com/Rosenmunda/netflix/discussions)

---

## 🗺️ Roadmap

- [ ] Add user authentication
- [ ] Implement backend API
- [ ] Add watchlist/favorites feature
- [ ] User profile customization
- [ ] Search and filter functionality
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Mobile app

---

## 📊 Stats

![GitHub Stars](https://img.shields.io/github/stars/Rosenmunda/netflix?style=flat-square)
![GitHub Forks](https://img.shields.io/github/forks/Rosenmunda/netflix?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/Rosenmunda/netflix?style=flat-square)

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

---

<div align="center">

**[⬆ back to top](#netflix-clone)**

Made with ❤️ by [Rosenmunda](https://github.com/Rosenmunda)

</div>
