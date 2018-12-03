# Warehouse-gamification

Warehouse-gamification is a Express.js, React and Redux based application, which aims to make warehouse working more enjoyable.

## Installation

To install, use: the following code at the project root:
```
npm install
```

This will install all dependencies needed for deployment and development in both the Front-end and backend.
It will also build the latest production version of the front-end, and move it to the backend for static file hosting.

Note. To use the application, you will have to set the following enviroment variables:
- DB_ADDRESS --- The address of the hosted MSSQLServer
- DB_NAME --- The name of the MSSQLServer database
- DB_USERNAME --- A username for the database
- DB_PASSWORD --- A password for the user


## Usage

To start the application use:
```
npm start
```
at the root of the project. This will start the project at PORT enviroment variable, and if not set, defaults to port 3000.

## Backend
Backend runs on Express, on top of Node.js, It uses Sequalize.js to connect to the azure hosted MSSQL server.

### Usage
If you want to intall only the backend, and not the front-end use:
```
cd backend
npm install
```

To start the development server
```
npm run start-dev
```

This differs triggers a development server which restart every time the server-files change.

To seed the database, use the command below __NOTE: This action clears all the current data__
```
npm run seed-db
```
### Adding more quests and users manually
Sometimes there's a need to add test data manually. To do so, you can add JSON to the `scripts/data/quests.json` and `scripts/data/users.json` files.

After adding the data, run `npm run seed-db` and the data will be available on the api endpoints


## Front-end 
Front-end uses React, Typescript, Sass and redux and is bootstrapped using Create-react-app

If you want to install only the front-end without back-end, use:
```
cd front-end
npm install
```

To start the front-end development server, use:
```
npm start
```

This will start a webpack development server that hot-reloads every time there's a change in the front-end files.


### Front-end building
To build the static files needed for hosting, use the following command:
```
npm run build
```
This will trigger the create-react-app build pipeline, that compiles Typescript into Javascript, SCSS into css and runs them through babel for ES5 support, and finally minifies them.
Note, that production build will use stricter compiler-rules, and versions that work in develop may not compile.
You can change _some_ of these configurations at `front-end/tsconfig.prod.json`

