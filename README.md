# SeatSense ✈️

A flight seat selection and passenger management interface built with React.

**Live demo:** <your-vercel-link>

## What it does

- Choose 1-6 passengers and assign each one a seat
- Switch between **3-2** and **2-3-2** aircraft layouts
- Seats have different states (available, occupied, selected) and price categories (Standard, Extra Legroom, Premium)
- Change or remove a seat at any time; earlier assignments are kept when you switch passengers
- Live itemized price breakdown and total
- Optional meal selection per passenger, included in the total
- Loading, empty and error states, with feedback for invalid actions
- Responsive layout with keyboard-accessible seats

## Tech stack

React, Vite, `useReducer` + Context for state, CSS Modules, Vitest for unit tests. All data is mocked; there is no backend.

## Getting started

    npm install
    npm run dev
    npm test

## State management and seat assignment logic

(Add your explanation here: state shape, how duplicates are prevented, how totals are derived.)
