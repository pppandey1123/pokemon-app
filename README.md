# Pokémon App

A simple Angular application to display Pokémon information fetched from the [PokéAPI](https://pokeapi.co/). The app showcases a list of Pokémon, their details, and includes a feedback form using Angular's reactive forms.

---

## Features

- **Home Page**: A welcome page with a brief description of the app.
- **Pokémon Data Page**:
  - Displays a list of Pokémon with their names and images.
  - Fetches data dynamically from the PokéAPI.
  - Shows additional details such as Pokémon abilities and types.
- **Feedback Page**:
  - A feedback form to collect user input (Name, Email, and Message).
  - Implements form validation using Angular's Reactive Forms.
- **Responsive Design**: Optimized for desktop and mobile screens.

---

## Technologies Used

- **Angular 16**: For building the single-page application.
- **Angular Router**: For client-side routing.
- **Reactive Forms**: For creating the feedback form.
- **HTTP Client**: For consuming the Pokémon API.
- **CSS Framework**: (Optional: Bootstrap for styling).
- **TypeScript**: For type-safe programming.

---

## API Reference

### PokéAPI
- **Base URL**: `https://pokeapi.co/api/v2`
- **Endpoints**:
  - `/pokemon?limit=20`: Fetches a list of Pokémon (first 20 by default).
  - `/pokemon/{name}`: Fetches detailed information for a specific Pokémon.

---

## Future Enhancements

- Add Pokémon search functionality.
- Include a pagination feature for large datasets.
- Implement a feature to mark Pokémon as favorites.
- Create a Pokémon comparison page.
- Enhance UI with animations and more detailed cards.

## Vercel: 
