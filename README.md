# Live Link Of the Site :- https://jade-meringue-49ad4a.netlify.app/


## General info
This a Web Chat Application made for Bobble Ai Hackathon - NIT Jamshedpur

## Features
* Add/Delete Room (only admin or room owner can delete the room)
* Update User Profile: Name, About, Profile Photo
* Upload photos and videos (cannot upload multiple files)
* Search rooms and messages
* Emojis

## Technologies
Project is created with:
* React
* React Context API
* React Router v5.2.0
* React Player v2.6.2
* React Toastify v6.0.8
* Emoji Mart v3.0.0"
* Material-Ui v4.11.0
* Firebase: Authentication, Cloud Firestore(db), Storage, Hosting

## Steps on how to clone
#### 1: Clone this repo using this command 
`git clone https://github.com/adarsh291201/BobbleAi-Hackathon`

#### 2: Enter into the the working root directory

#### 3: Next
`npm install`

#### 4: Goto the file to `firebase.js` and input your config data.

#### 5: Now, Goto `src` directory again and find file named `.firebasesrc`
Replace the line `"default": "your_project__name"` & save.

#### 6: Hit `npm start` in terminal. 


## Set Up Hosting in Firebase

#### 1: Hit command `firebase init`

#### 2: Enter Yes

#### 3: Goto the 4th option says - "Configure and Deploy firebase Hosting sites", Use Arrow key to go down & Hit spacebar to select the option and then hit Enter key

#### 4: Enter `build` for directory && select `Yes` for for as a single-page app and `No` for Overwrite.

#### 5: After initialization Completed. Enter 
`npm run build`

#### 6: Now the last command
Enter `firebase deploy`

#### You have succesfully hosted your firebase app. Click on the link and Enjoy!. Don't forget to rate the repository.
