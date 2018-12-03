# Warehouse-gamification back-end

The backend runs on top of Node.js, and uses Express as the web-framwork and Sequalize.js as the ORM-library.


## Models

Models are kept in `server/models`-folder.
Models are build using the Sequalize ORM-library, and should be usable in just about any relational database by just changing the sequalize configuration in `server/models/index.sj`.

### Adding models
To add more models, take example of the previous models and their configurations, and if needed, check sequalize.js documentation for better understanding.

On each start of the server, the sequalize start-up script, located at `server/models/index.js` will look for sequalize models in it's folder, and add them to the database if they're not present.

```

## Routes
Routes are configured `server/app.js`, where route files from `server/routes` are required for certain url-patterns.
After matching the url-pattern, the required route will handle rest of the logic.

To find more info how express handles it's routing, check express.js documentation