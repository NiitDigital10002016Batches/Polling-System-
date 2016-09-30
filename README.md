# Polling-System- a real-time polls application with Node.js, AngularJS , ExpressJS and MongoDB
Application allows to create polls and enables users to vote on polls, with the results updating in real-time.

Software Requirements:
* Install Nodejs
* Install MongoDB
* Install Mongochef Enterprise
* Install Visual Studio Code 

Initial steps to create 'mixpolls' application:
* In Nodejs command prompt run the Mongodb using 'mongod'
* In another Nodejs command prompt create Project folder using 'mkdir mixpolls'
* Go to the project directory('cd mixpolls') and install 'express' as well as 'express-generator' using:
    npm install -g express
    npm install -g express-generator
* 'express mixpolls' command is used get the default express folder structure:
    -bin
        -www
    -public
        -images
        -javascripts
        -stylesheets
            -style.css
    -routes
        -index.js
        -users.js
    -views
        -error.jade
        -index.jade
        -layout.jade
    -app.js
    -package.json

* To install all required packages run 'npm install' from the created 'mixpolls' directory. This will create 'node-modules' folder having all dependent libraries.
* Apart from the default express libraries the following additional libraries and frameworks will be added:
    -jade
    -mongoose
    -socket.io
    
Implementation:
* Create a new folder 'models' to accommoadate the database for the application. As the application is using two collection, there would be .js files corresponding to each collection.
* Update routes->index.js to create the database connection. The same file would be used to query the database and retrieve results.
  Remove users.js as we would not be using the same in current implementation
* Then, update views->index.jade to get the default page and load the default scripts needed throughout the application.
  Also, remove error.jade and layout.jade as they are not needed for this project. 
* Now in public folder, rename images as partials as they are no images as of now for the applications. In partials the following html files would be created to handle different pages:
  - login.html : login page
  - register.html : register new user
  - new.html : create new poll
  - list.html : view the polling list
  - item.html : cast vote and show results
* In public folder, new javascripts will be added:
  - services.js : Angular service module for connecting to JSON APIs
  - app.js : defining routes for the app
  - controller.js 
    Controller for creating a new user
    Controller for validating user
    Controller for the poll list
    Controller for an individual poll
    Controller for creating a new poll
* The style.css in stylesheets would contain the basic styles applied throughout the application.
  Other css used in the application is sweetalert for angular alert messages. This is a package from npm. 
* Lastly, app.js is modified load the main page and route thorugh MongoDB API(s).
* As per the current implementation, the application would run on http://localhost:3000. 

