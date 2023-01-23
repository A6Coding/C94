const firebaseConfig = {
    apiKey: "AIzaSyCAJxapXTeOehHkvMf1yMLtL9AFMm1oa0k",
    authDomain: "class94-41d49.firebaseapp.com",
    databaseURL: "https://class94-41d49-default-rtdb.firebaseio.com",
    projectId: "class94-41d49",
    storageBucket: "class94-41d49.appspot.com",
    messagingSenderId: "372800155764",
    appId: "1:372800155764:web:dbc1b13308551636726121"
};
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}