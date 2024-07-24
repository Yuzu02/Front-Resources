# Carrusel Project

The Carrusel Project is a dynamic image carousel that allows users to view a series of images by sliding through them either by clicking buttons or by using touch gestures on mobile devices. It's designed to be responsive and intuitive, providing a seamless experience across different devices.

## Features

- **Dynamic Image Sliding**: Users can navigate through images using left and right buttons or by swiping on touch devices.
- **Responsive Design**: The carousel adjusts to fit the screen size, ensuring a great experience on both desktop and mobile devices.
- **Touch and Mouse Support**: Supports navigation through touch events on mobile devices and mouse events on desktops.

## Technologies Used

- **HTML**: Structures the web page and the carousel component. See the structure in [index.html](Projects/Carrusel/HTML/index.html).
- **CSS**: Styles the carousel to be visually appealing and responsive. The styling is defined in [styles.css](Projects/Carrusel/CSS/styles.css).
- **JavaScript**: Adds interactivity to the carousel, handling image sliding logic. The functionality is implemented in [script.js](Projects/Carrusel/JS/script.js).

## Getting Started

To use the Carrusel Project in your website, follow these steps:

1. Clone the repository or download the Carrusel project folder.
2. Include the HTML structure in your page.
3. Link to the `styles.css` file in your `<head>` section.
4. Include the `script.js` file just before your closing `</body>` tag, using the `defer` attribute to ensure it loads after the HTML content.

## How It Works

The carousel is made up of a container that holds the images and two buttons for navigation. The images are laid out side by side using flexbox, and the container's overflow is hidden to create the carousel effect. The JavaScript file listens for click events on the buttons or swipe gestures to change the displayed image by adjusting the container's `transform` property.
