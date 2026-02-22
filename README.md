# Aarthi Kannan - Professional Portfolio Website

A modern, interactive, and visually stunning portfolio website showcasing expertise in Chemical Process Engineering, DCS Control Systems, and Process Optimization.

## Features

### Design & Aesthetics
- **Modern Dark Theme**: Professional color palette with cyan, blue, and emerald accents
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Animations**: Dynamic color transitions and shimmer effects
- **Particle Background**: Animated floating particles in the hero section
- **Custom Typography**: Outfit (headings), Inter (body), JetBrains Mono (code/metrics)

### Interactive Elements
- **Typing Animation**: Dynamic role display in hero section
- **Smooth Scroll Navigation**: Sticky navbar with active section highlighting
- **Expandable Timeline**: Interactive experience cards with detailed achievements
- **Skill Categories**: Tabbed interface with animated progress bars
- **Form Validation**: Real-time contact form validation
- **Hover Effects**: Micro-interactions on all interactive elements
- **Copy to Clipboard**: Quick email copy functionality

### Sections

1. **Hero Section**
   - Animated typing effect showing multiple roles
   - Particle background animation
   - Call-to-action buttons (Get In Touch, Download Resume, View Work)
   - Social media links

2. **About Me**
   - Story-driven narrative of professional journey
   - Key highlights with icon cards
   - Animated career timeline (2015-2024)
   - Detailed professional story

3. **Skills**
   - 6 Skill categories with tabbed navigation:
     - Control Systems (DCS, PID Tuning)
     - Process Engineering
     - Software & Tools
     - Analysis & Optimization
     - Safety & Compliance
     - Professional Skills
   - Animated progress bars showing proficiency levels
   - Real-world application examples for each skill

4. **Experience**
   - Interactive timeline with expandable cards
   - Current role: Senior Engineer at Tamil Nadu Petroproducts Limited
   - Previous internships and training
   - Detailed achievements grouped by impact area

5. **Achievements**
   - Measurable impact metrics:
     - Process efficiency improvement (92% → 92.9%)
     - Power consumption reduction
     - Water conservation initiatives
     - Zero safety violations
   - Certifications and training
   - Languages and international experience

6. **Education**
   - B.Tech in Chemical Engineering (9.2 CGPA)
   - Early industrial training experiences
   - Continuous learning initiatives

7. **Contact**
   - Modern contact form with validation
   - Direct contact information
   - Social media links
   - Copy-to-clipboard email functionality

8. **Footer**
   - Back-to-top button
   - Professional tagline
   - Copyright information

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Outfit, Inter, JetBrains Mono)

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## Customization

### Updating Personal Information

- **Contact Details**: Edit `src/components/Contact.tsx` and `src/components/Hero.tsx`
- **Professional Summary**: Edit `src/components/About.tsx`
- **Skills**: Modify the skills object in `src/components/Skills.tsx`
- **Experience**: Update the experiences array in `src/components/Experience.tsx`
- **Education**: Edit `src/components/Education.tsx`

### Changing Colors

Colors are defined using Tailwind CSS classes. Main color scheme:
- Primary: Cyan (cyan-400, cyan-500, cyan-600)
- Secondary: Blue (blue-400, blue-500, blue-600)
- Accent: Emerald (emerald-400, emerald-500)
- Background: Slate (slate-900, slate-950)

To change colors, update the gradient classes in components.

### Modifying Animations

Animations are handled by Framer Motion. Adjust animation properties in component files:
- `initial`: Starting state
- `animate`: End state
- `transition`: Animation timing and easing

## Performance Optimization

- **Code Splitting**: Vite automatically splits code for optimal loading
- **Image Optimization**: Use WebP format for images
- **Lazy Loading**: Components load on scroll using Intersection Observer
- **Minification**: Production build is automatically minified
- **Tree Shaking**: Unused code is removed during build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios (WCAG compliant)
- Focus indicators for interactive elements

## License

This project is open source and available for personal use.

## Contact

**Aarthi Kannan**
- Email: chemical.aarthi@gmail.com
- Phone: +91 9789068734
- Location: Chennai, India

---

**Built with precision and passion** | Transforming industrial complexity into measurable efficiency
