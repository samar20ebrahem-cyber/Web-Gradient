# 📝 Interactive Notes App (OOP-based)

A sleek, fully interactive web application for creating and managing personalized notes, built using clean, modular **Object-Oriented Programming (OOP)** principles in JavaScript.

## ✨ Features
- **Dynamic Note Creation:** Users can instantly add notes with custom text.
- **Customization (Color Palette):** Ability to pick a unique text color and background color for each note before adding it.
- **Responsive Layout:** Notes span beautifully across the container width with a modern, structured layout.
- **Easy Management:** Each note comes with a dedicated delete button for instant removal.
- **Clean Architecture:** Built entirely using JavaScript Classes, tracking DOM elements, and managing actions efficiently using event handlers.

## 🛠️ Tech Stack
- **HTML5:** Semantic structure.
- **CSS3:** Modern layout using Flexbox, customizable variables, and smooth animations.
- **JavaScript (ES6+):** Object-Oriented Programming (Classes, Constructors, and DOM Manipulation).

## 🚀 How it Works (OOP Architecture)
The application is wrapped inside a single `NotesApp` class:
1. The `constructor()` initializes properties and fetches DOM elements.
2. The `event()` method attaches required listeners.
3. The `addNotes()` method handles form validation and logic.
4. The `renderNotes()` dynamically creates and appends the customized components into the view.
