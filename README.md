# Property Listing App - Detail Page Implementation

This project implements a responsive Property Detail Page for a listing application using Next.js, TypeScript, and Tailwind CSS.

## Project Setup

1. Clone the base repository:
```bash
git clone https://github.com/Dayvid0063/alx-listing-app-00.git
```

2. Create a new repository and name it:
```bash
alx-listing-app-detail
```

3. Move all files to the root of the new repository.

## Project Structure

```
alx-listing-app-detail/
├── components/
│   └── property/
│       ├── PropertyDetail.tsx
│       ├── BookingSection.tsx
│       └── ReviewSection.tsx
├── pages/
│   └── property/
│       └── [id].tsx
├── interfaces/
│   └── index.ts
├── constants/
│   └── index.ts
└── README.md
```

## Components Overview

### PropertyDetail.tsx
- Displays property name, rating, and location
- Shows image grid of the property
- Implements tabbed interface for:
  - What we offer
  - About host
  - Reviews

### BookingSection.tsx
- Shows nightly price
- Provides date selection for check-in/check-out
- Calculates total cost
- Includes reservation button

### ReviewSection.tsx
- Displays user reviews with:
  - Profile pictures
  - Ratings
  - Comments

## Features

- Responsive design using Tailwind CSS
- Dynamic routing with Next.js
- Custom tab implementation
- Date-based price calculation
- Image grid layout
- Review system
- Booking functionality

## Implementation Steps

1. Create necessary directories and files
2. Implement interfaces and constants
3. Create dynamic property page
4. Build individual components
5. Style with Tailwind CSS
6. Test responsiveness and functionality

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Access the application at `http://localhost:3000/property/[property-name]`

## Key Files

### pages/property/[id].tsx
Dynamic route for individual property pages

### components/property/PropertyDetail.tsx
Main component for displaying property information

### components/property/BookingSection.tsx
Handles booking functionality and price calculations

### components/property/ReviewSection.tsx
Displays property reviews and ratings

### interfaces/index.ts
TypeScript interfaces for components

### constants/index.ts
Sample data and placeholder images
