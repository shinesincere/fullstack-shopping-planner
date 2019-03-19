$ create-react-app .   
$ npm i -S axios bootstrap concurrently dotenv mongoose prop-types react-redux react-router-dom react-transition-group reactstrap redux redux-thunk

$ npm start  ( http://localhost:3000/ )
$ code public/index.html   ( Fullstack Shopping Planner )
$ code server.js 
$ code package.json
  ( "homepage": "https://fullstack-shopping-planner.herokuapp.com/",
    "scripts": {
      "eject": "react-scripts eject",
      "test": "react-scripts test",
      "start": "PORT=3000 react-scripts start",
      "build": "react-scripts build",
      "dev": "NODE_ENV=development node src/server.js",
      "pro": "NODE_ENV=production node src/server.js",
      "startdev": "concurrently \"npm start\" \"npm run dev\"",
      "buildpro": "npm run build && npm run pro"
    },
    "proxy": "http://localhost:3002")
$ npm run startdev  ( http://localhost:3000/ http://localhost:3002/ )

$ code .gitignore   ( /node_modules   .env )
$ rm -rf .git && git init && git status && git add . && git commit -m 'Github'
$ git remote add origin https://github.com/shinesincere/fullstack-shopping-planner.git
$ git push -u origin master


$ rm -rf build && npm run buildpro  ( http://localhost:3002/ )
* https://dashboard.heroku.com/apps/fullstack-shopping-planner/settings for deleting the app
$ heroku login && heroku create fullstack-shopping-planner && heroku git:remote -a fullstack-shopping-planner
* https://dashboard.heroku.com/apps/fullstack-shopping-planner/settings for .env replacement
$ git add . && git commit -m 'Heroku' && git push heroku master && heroku open && heroku logs

$ git remote add origin https://github.com/shinesincere/fullstack-shopping-planner.git



<!-- 
$ npm run build && npm i -S gh-pages
$ code package.json   
    ( "homepage": "http://shinesincere.github.io/fullstack-shopping-planner", "deploygh": "gh-pages -d build" )
$ npm run deploygh 
-->