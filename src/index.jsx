import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'

firebase.initializeApp({
	apiKey: "AIzaSyB9-snVTOm13dL2-JQpbVO01n2yeHCq4xQ",
	authDomain: "reac-firebase-chat.firebaseapp.com",
	databaseURL: "https://reac-firebase-chat.firebaseio.com",
	storageBucket: "reac-firebase-chat.appspot.com",
	messagingSenderId: "950649050557"
})

import App from './components/App'

render(<App />, document.getElementById('app'))