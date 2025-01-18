# ALX Listing App (Responsive Property Listing Page)

A responsive property listing page built with Next.js and Tailwind CSS. This project implements a modern, user-friendly interface for browsing property listings with features like filtering, responsive design, and a clean layout.

## 📝 Overview

This project is a property listing page that includes:
- Responsive header with navigation and user actions
- Hero section
- Search functionality
- Property filters
- Grid layout for property listings
- Responsive footer with multiple sections
- Clean, modern UI using Tailwind CSS

---

## 🛠️ Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - For type safety and better development experience
- **Tailwind CSS** - For styling and responsive design
- **next/image** - For optimized image loading

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.0 or higher)
- npm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dayvid0063/alx-listing-app-00.git
cd alx-listing-app-00
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 📁 Project Structure

```
alx-listing-app-00/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── constants/
│   └── index.ts
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   └── index.tsx
├── public/
│   └── assets/
├── styles/
│   └── globals.css
└── next.config.js
```

---

## 🎯 Features

### Property Listings
- Responsive grid layout
- Property cards with:
  - Image with fallback handling
  - Property title and location
  - Price information
  - Rating display
  - Category tags

### Filter System
- Horizontal scrollable filter pills
- Category-based filtering
- Mobile-responsive design

### Header Component

- Responsive navigation
- User authentication buttons
- Accommodation type filters
- Sticky positioning for better UX

### Footer Component
- Multi-column layout
- Organized link sections
- Responsive design
- Copyright information

---

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- Responsive breakpoints
- Custom color scheme
- Flexible grid system
- Hover and transition effects
