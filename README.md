# React - Lost in translation

A online sign language translator as a Single Page Application (SPA) using the React Framework. This application is deployed to Heroku as well: https://react-translation-to-sign.herokuapp.com/

## Install
This project was created using npx: 
``` npx create-react-app react-lost-in-translation ```

## Description
The applications main feature is to translate regular text to sign language. This will translate English words and short sentences to American sign language. The application is divided into three main pages: Startup/login page, translator page, and a profile page
### The Startup page
This is the page that the user firstly arrives to and a user should here be able to enter their username. The username will then be added to the Translation API. Once the username has been successfully entered, the user can move to the translation page, by clicking on the "Continue to translation" button. Users that are already logged in will automatically be redirected to the Translation Page. The local storage handles the users session.
### The Translation page
This is the main page and user may only see this if the login was successful. A user can here type in a word in the input field and click on "Translate" to translate the word to signs. The translations then gets stored in the API for the user. 
### **The Profile page**
The profile page have some information and actions available:
* The current user can see their 10 last translations done previously.
* There is also a "clear history" button which clears the previous translations and also applies it to the Translation API. 
* A Logout button is also available here for the current user to the end their session. The current user will then be redirected back to the Startup page. 

## Features/tools
* React framework
* React router
* API
* Redux Toolkit: https://redux-toolkit.js.org
* Figma - design of the component tree (done before coding)
* Visual Studio Code
* Heroku
* Rest API: https://github.com/dewald-els/noroff-assignment-api

## Developer and Author
* Ammar Ahmed
