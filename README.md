# The Brandro - Brand Strategy & PR Website

A modern, responsive website for The Brandro - a strategic PR and branding house dedicated to shaping brands with clarity, purpose, and intention.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dynamic Service Cards**: Different sized cards showcasing various services
- **YouTube Integration**: Embedded brand story video
- **Contact Form**: Interactive contact form for client inquiries
- **SEO Optimized**: Built with Angular and optimized for search engines

## 🛠️ Tech Stack

- **Framework**: Angular 20.2.0
- **Styling**: Tailwind CSS 3.4.17
- **Language**: TypeScript 5.9.2
- **Build Tool**: Angular CLI
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Neeraali-digital/BrandroFrontend-0.1.git
cd BrandroFrontend-0.1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## 🏗️ Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/brandro-app/browser` directory.

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's an Angular project

2. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist/brandro-app/browser`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard

4. **Deploy**:
   - Click "Deploy" and Vercel will build and deploy your application
   - Your site will be available at `https://your-project-name.vercel.app`

### Manual Deployment Steps

1. **Push to GitHub**:
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. **Vercel Configuration**:
   - The `vercel.json` file is already configured for optimal deployment
   - Static assets are cached for 1 year
   - All routes redirect to `index.html` for SPA routing

## 📁 Project Structure

```
src/
├── app/
│   ├── app.component.html    # Main template with all sections
│   ├── app.component.scss    # Component-specific styles
│   ├── app.component.ts      # Main component logic
│   └── app.config.ts         # App configuration
├── styles.scss               # Global styles
└── main.ts                   # Application bootstrap

public/                       # Static assets
dist/                        # Build output
vercel.json                  # Vercel deployment configuration
```

## 🎨 Sections

- **Hero Section**: Main landing area with call-to-action
- **Our Story**: About section with embedded YouTube video
- **What We Do**: Service cards with different sizes and detailed descriptions
- **Our Approach**: 5-step process visualization
- **Portfolio**: Client logo showcase
- **YouTube**: Content and channel promotion
- **Contact**: Contact form and information
- **Footer**: Links and social media

## 🔧 Configuration Files

- `vercel.json`: Vercel deployment configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `angular.json`: Angular CLI configuration
- `tsconfig.json`: TypeScript configuration

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Optimized images and assets
- Lazy loading where applicable
- Minified CSS and JavaScript
- Efficient caching strategies

## 📞 Support

For support or questions, contact:
- Email: hello@thebrandro.com
- Website: [The Brandro](https://your-domain.com)

## 📄 License

This project is proprietary and confidential.

---

Built with ❤️ by The Brandro Team