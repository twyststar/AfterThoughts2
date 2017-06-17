# Afterthoughts2
##  This is a continuation of AfterThoughts Epicodus project. Created second repository as I wanted to continue working without violating submission time limit. Will be merged with original AfterThoughts repository post code review. 

  _A book club site by Starlynne Start, 6.16.17_

## Detailed Description

  _This is a book club website created for Epicodus AngularJS. It will track club members, books read, discussion points on books read, upcoming book suggestions and any live meetings/events of the club members. Designed primarily for club member as user, admin abilities such as add/edit/delete users or books will also be available. All data is persisted in a database._

## Prereqs/Setup/Installation

* Clone this repository
* Navigate to repository in command line
* Run npm install
* Open project in editor
* Create a file in src/app called api-keys.ts
* Follow instructions below to set-up Firebase
* Command line - run ng serve
* View app at http://localhost:4200/

## Firebase

_In order to run this app, you will need a Firebase account and credentials._
* Go to https://firebase.google.com/ and set up an account
* Create a new project
* Select "Add Firebase To Your Website"
* Copy the credentials
* In the cloned project file src/api/api-keys.ts, type:
  * export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
  *  Place your Firebase credentials in the appropriate spots.
* Return to Firebase Console, select project's name from the list.
* Visit the Database area by selecting the Database option from the navbar on the left-hand side.
* Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.
* Change both the ".read", and ".write" properties here to "true"

## Technologies Used

* Firebase/AngularFire

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

* Bootstrap

## Support and contact details

_Comment, concerns or suggestions welcome! lewis.start0905@gmail.com_

### License

*MIT*

Copyright (c) 2017 **_Starlynne Start_**


#### Planning
_Planning and goals can be found in planning.txt_
