# TODO-Frontend

Frontend to `https://github.com/morosystems/todo-be`

## Installation

- clone this repository
- `npm install`
- `npm start` will start server on `http://localhost:3000`

## Planned update

- modify renaming with a EDIT button that brings up an input field, so that it is not showing constantly.

## Known issues

- currently a lot of the actions carry the 3s delay from the backend when loading the list. Possible solution to load from db.json only once and keep any further updates on State for frontend and with axios for db.json on backend.
