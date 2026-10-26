# ebd bn'b, end of Lab 7

Two folders, two terminals:

- `backend/`: the API from Lab 5, Part 2. It needs a `.env` next to its `package.json`
  with your own `MONGODB_URI` (the file Atlas gave you in Lab 5). Then `npm install`, `npm run dev`.
- `frontend/`: the React app, with React Router: a home page, a form to add a listing,
  a page per listing, and delete. The listings are still fake (`src/data/listings.js`);
  Lab 8 gets them from the back end. `npm install`, then `npm run dev`, and open the link it prints.
