# ebd bn'b, end of Lab 9

Two folders, two terminals:

- `backend/`: the API, with users (register, log in), a JWT check on the routes that change
  data, and an owner on every listing. It needs a `.env` next to its `package.json` with your own
  `MONGODB_URI` (the file Atlas gave you in Lab 5) and a `JWT_SECRET` (see `.env.example`).
  Then `npm install`, `npm run dev`.
- `frontend/`: the React app, with log in, register, and "My listings". It talks to the API
  (`src/api/`), so the back end must be running. `npm install`, then
  `npm run dev`, and open the link it prints.
