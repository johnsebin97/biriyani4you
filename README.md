# South Indian Biriyani Website

A beautiful, responsive website for a South Indian Biriyani business in Frankfurt (Oder). The website features a modern design with warm Indian colors, smooth animations, and mobile-first approach.

## Features

- Responsive design that works on all devices
- Modern UI with warm Indian color scheme
- Smooth scrolling and animations
- Mobile-first approach
- WhatsApp integration for group joining
- Email subscription system
- Pre-order functionality
- Parallax effects
- Testimonials section
- Chef profile section
- How it works guide

## Setup Instructions

1. Clone this repository to your local machine
2. Replace the placeholder images:
   - Add your hero background image as `biriyani-bg.jpg`
   - Add your chef's photo as `chef-placeholder.jpg`
3. Update the content:
   - Replace the next biriyani date in `index.html`
   - Update the chef's name and bio
   - Add your contact information in the footer
   - Update the WhatsApp group link in `script.js`
4. Customize the colors:
   - Edit the CSS variables in `styles.css` to match your brand colors
5. Deploy to your preferred hosting service

## Customization

### Colors
The website uses CSS variables for easy color customization. Edit these variables in `styles.css`:

```css
:root {
    --saffron: #FF9933;
    --maroon: #800020;
    --earth-brown: #8B4513;
    --cream: #FFFDD0;
    --dark-brown: #4A2C2A;
    --white: #FFFFFF;
    --black: #000000;
}
```

### Images
Replace the following images:
- `biriyani-bg.jpg`: Hero section background
- `chef-placeholder.jpg`: Chef's profile picture

### Content
Update the following content in `index.html`:
- Next biriyani date
- Chef's name and bio
- Contact information
- Social media links
- Testimonials

### WhatsApp Integration
Update the WhatsApp group link in `script.js`:
```javascript
window.open('https://wa.me/yourphonenumber', '_blank');
```

## Dependencies

- [ScrollReveal](https://scrollrevealjs.org/) for scroll animations
- [Google Fonts](https://fonts.google.com/) (Poppins)

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 