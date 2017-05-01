![](./screenshots/chat_demo.png)

# Yabber
Simple Group Chat Application built using MEAN stack and Socket.io for Zoho
Project Contest 2017.

## Index
  * [Technology Colophon](#colophon)
  * [Installation](#installation)
  * [Features](#features)
  * [Documents](#documents)
  * [Screenshots](#screenshots)
  * [Contribute](#contribute)
  * [License](#license)

## Technology Colophon <a name="colophon"></a>
  * Backend -
    * Node.js
    * Framework - Express.js
    * Socket Connection - Socket.io
    * Database - MongoDB
    * ODM - Mongoose.js
    * Templating - Handlebars
    * Session Storage - Redis
    * Authetication - Passport.js with Bcrypt for encryption
    * Task Runner - Gulp
  * Frontend -
    * Framework - Angular 4
    * CSS Preprocessor - SCSS
    * CSS Reset - Normalize.css
    * Angular Client Libraries -
      * angular/material
      * JQuery
      * JQuery-UI
      * angular2-notifications
      * bootstrap
      * twemoji
    * Libraries used by non-angular client pages -
      * materialize-css
      * Babel with Browserify

## Installation <a name="installation"></a>
  1. Install Node.js, MongoDB, and Redis
  2. Install Angular CLI

  ```
    $ sudo npm install -g @angular/cli
  ```
  3. Clone the repository
  ```
    $ git clone https://github.com/AravindVasudev/Yabber.git
    cd yabber
  ```
  4. Install dependencies
  ```
    $ npm install
  ```
  5. Build the angular client-side
  ```
    $ cd client
    $ npm install
    $ ng build --base-href chat
    $ cd ..
  ```
  6. Start MongoDB
  ```
    $ sudo service mongod start
  ```
  7. Start the application
  ```
    $ npm start
  ```
  8. The application is now running on `http://localhost:3000/`

## Features <a name="features"></a>
  * Group Chat
  * Instant Communication using web sockets
  * Image Transfer
  * Secure Authetication using passport.js and bcrypt
  * Parses emoji in text into image for cross browser compactibility
  * Emoji Tray for easy access to emojis
  * Push notification when window not in focus
  * alert sound when message received
  * interfaced embedded progress bar to signify image upload progress
  * Right click context menu overridden for accessibility
  * Image full screen on click

Bugs:
  * When new group is added, the window has to be manually freshed for the update.
  * App crashes if any value is left blank on new group creation.
  * Group icon, dp icon is read as link instead of providing upload functionality

P.S.: This application is built within a time limit and hence the bugs.

## Documents <a name="documents"></a>
Documents prepared during the event are linked below:
  * [Software Requirements Specification](./documents/srs.pdf)
  * [Proposed Design & Data Model](./documents/Proposed%20Design%20%26%20Data%20Model.pdf)

## Screenshots <a name="screenshots"></a>
* Login Screen

 ![](./screenshots/login.png)

* Signup Screen

 ![](./screenshots/signup.png)

 * Chat Demo

  ![](./screenshots/chat_demo.png)

 * Context Menu

  ![](./screenshots/context_menu.png)

 * Emoji Tray

  ![](./screenshots/emoji_tray.png)

 * Progress Bar

  ![](./screenshots/progress_bar.png)

 * Push Notification

  ![](./screenshots/push_notification_when_window_not_focused.png)


## Contribute <a name="contribute"></a>
  You are always welcome to open an issue or provide a pull-request!

## License <a name="license"></a>
  Built under [MIT](http://www.opensource.org/licenses/mit-license.php) license.

