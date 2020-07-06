
[![Netlify Status](https://api.netlify.com/api/v1/badges/a4961057-4cb0-461a-a797-4f67d440bec6/deploy-status)](https://app.netlify.com/sites/dumbsound/deploys)

online test : [Dumbsound online](https://dumbsound.netlify.app/)
- login default 
	- email : user@gmail.com
	- password : 1234
- Or you can register a new account, but can't play songs.
# Welcome to Dumbsound Web App!
Dumbsound is a music streaming service, providing music from various countries, artists and record labels.
[Go to backend](https://github.com/elcoputra/dw16stn70_dumbsound_backend)
## Current Status
PROTOTYPE
## Technology
Create React App, Express.js, Material UI, Moment.Js, Hapi Joi, React Jingke Music Player, Redux, Redux Thunk, Axios, Bycript, Cors, Dotenv, Jsonwebtoken, Sequelize, MariaDB.
## Depedency
- node 12
- npm
## Starting project on your local machine
Install
`npm install` on project folder
Start
`npm start` on project folder
#### set url for backend
- When running locally : 
   - in `your_project/src/config/axiosConfig.js` comment line 5 and comment line 6
 - When running online:
   - create .env file in the project root `REACT_APP_BASE_URL_ONLINE=YOUR_LINK_URL_HERE` example `REACT_APP_BASE_URL_ONLINE=https://myproject.herokuapp.com/api/v1`
## Missing feature
- ~~Delete Music~~
- ~~Search Music~~
- ~~Update Music~~
# Screenshoot
![ss](https://raw.githubusercontent.com/elcoputra/dw16stn70_dumbsound_frontend/master/SS/all.png)
![Update delete (admin only)](https://i.imgur.com/DnG0l6K.gif)
