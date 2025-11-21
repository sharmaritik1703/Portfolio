# Ritik Sharma's Portfolio Website

A modern, responsive portfolio website built with React, showcasing AI/ML research, publications, projects, and professional experience in healthcare AI and deep learning.

## Features

- **Modern Design**: Clean, attractive UI with smooth animations and gradients
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **React Components**: Built with React using CDN (no build process needed)
- **Smooth Animations**: Typing effect, floating elements, scroll animations
- **Interactive Sections**:
  - Hero section with AI/ML focus and typing animation
  - About section highlighting research interests
  - Technical skills with AI/ML frameworks
  - Experience timeline from IIT Mandi
  - Publications section with 5+ research papers
  - Research projects showcase
  - Contact form with professional links

## Technologies Used

- **React 18** (via CDN)
- **HTML5** & **CSS3**
- **JavaScript (ES6+)**
- **Font Awesome** for icons
- **Google Fonts** (Poppins)

## Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser. No server or build process required!

### Option 2: Use Live Server (Recommended)
1. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"
3. The portfolio will open at `http://localhost:5500`

### Option 3: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Customization

### Update Personal Information

Edit `main.js` to customize:

1. **Hero Section**: Already updated with Ritik Sharma's info
2. **About Section**: Configured with IIT Mandi research focus
3. **Skills Section**: Set with AI/ML frameworks and tools
4. **Experience**: Includes Project Associate and TA positions
5. **Publications**: Features 5 published research papers
6. **Projects**: Showcases DiaBreath and other research work
7. **Contact**: Updated with real email, phone, and links

### Update Colors

Edit CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... customize more colors */
}
```

### Add Profile Photo

Replace the placeholder in the Hero section:
1. Add your image to the portfolio folder
2. In `main.js`, replace the `.image-placeholder` div with:
```jsx
<img src="your-photo.jpg" alt="Your Name" />
```

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify

1. Drag and drop the portfolio folder to [Netlify](https://app.netlify.com/drop)
2. Your site will be live instantly with a custom URL

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the portfolio directory
3. Follow the prompts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

## Contact

Feel free to reach out for research collaboration or opportunities!

- Email: sharmaritik351@gmail.com
- LinkedIn: [linkedin.com/in/ritiksharma351](https://linkedin.com/in/ritiksharma351)
- GitHub: [github.com/sharmaritik1703](https://github.com/sharmaritik1703)
- ORCID: [0009-0008-2193-399X](https://orcid.org/0009-0008-2193-399X)
- Location: Shimla, Himachal Pradesh, India

---

**Ritik Sharma** - AI/ML Research Scholar @ IIT Mandi  
Built with React
