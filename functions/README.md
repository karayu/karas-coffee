## Firebase Functions

Firebase Cloud Functions for the demo application.


### `onAuthCreate`

This function adds a new document to the `mail` collection on new user creation - this collection is listened to by the [Firestore Send Email](https://firebase.google.com/products/extensions/firestore-send-email) extension 
and sends a welcome email to the new user.