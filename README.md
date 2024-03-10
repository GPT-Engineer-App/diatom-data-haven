# diatom-data-haven

I want to build a platform online with data for diatoms. The platform will contain a database of all diatoms along with their occurence data (that will be entered by curators) along with the environmental data where they were found (type of waterbody, temperature of the day they were collected, conductivity, nutrients, etc.). 
For each of these environmental parameters, each diatom will have an ecological optimal and range, where that species would thrive. I want those values to be recalculated automatically for each species each time the user searches for the data, so whenever new data is added to the database the ecological values change.
Also I want users to be able to filter not only by species but by geographical areas. For instance if they search for the species Nitzschia palea in Argentina, they would get the info for that species, and the ecological values calculated only using the occurences for that country.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/diatom-data-haven.git
cd diatom-data-haven
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
