# This is a Next.js application

### Introduction

This web application includes a customizable Navbar feature to provide users with the flexibility to change the theme or items of a Navbar.

### File structure.

```jsx
src /
├── test/
│ ├── index.test.tsx
│ └── ...
├── pages/
│ ├── api
│ │ ├── custom.ts
│ │ └── ...
│ ├── index.js
│ ├── about.js
│ └── ...
├── assets/
│ ├── svgs/
│ │ ├── logo.svg
│ │ └── ...
│ ├── pngs/
│ │ ├── logo.png
│ │ └── ...
│ └── ...
├── styles/
│ ├── global.css
│ ├── home.module.css
│ └── ...
└── ...
```

### Utilities

No util class or helper is needed at this time as it is a small and simple application.

### How navbar is customized

each user will have a database record of his own customization, the navbar will have to have some properties including the:

```json
{
  "navStyle": "style_2",
  "elements": [
    { "name": "logo", "url": "", "display": false },
    { "name": "location", "url": "", "display": true },
    { "name": "lang", "url": "", "display": true },
    { "name": "account", "url": "", "display": false },
    { "name": "home", "url": "", "display": true },
    { "name": "cart", "url": "", "display": false }
  ]
}
```

by default there may be multiple auto/default styles, the user can pick one of the existing styles and hit apply, however, users have the ability to fully customize the navbar items and select what they want to display on their stores.
the element object represents all available elements, each one can be displayed on the screen and each one may have as many properties as the developer wants to.
every element must have a name (e.g. logo, location, ...etc) and a displayed property that can be changed to either true of false.

**\*Note:** There are many ways of fixing this problem and many of these ways can provide users with multiple features such as drag-n-drop to fully customize the navbar including the order of the elements and everything, and saving these customizations into a separate CSS file at the editing time, **but**, if we gave the user all these abilities, this might come up with a bad user experience for customers and buyers because not every user knows how to design and how to pick colors, **so my suggestion** is to limit user boundaries \*\*

### How the customization is saved

connecting to the API that Next.js have provided, I saved all user customizations in a JSON file as a database.
