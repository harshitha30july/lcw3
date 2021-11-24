//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB9My4vYi0aqBlKYHYUyge7v8pJPBMtFjA",
      authDomain: "lcw2-229c3.firebaseapp.com",
      databaseURL: "https://lcw2-229c3-default-rtdb.firebaseio.com",
      projectId: "lcw2-229c3",
      storageBucket: "lcw2-229c3.appspot.com",
      messagingSenderId: "542371527776",
      appId: "1:542371527776:web:0f96ecb0d2357231cdd705"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  function send()
  {
        msg=document.getElementById("msg").value;

        console.log(msg);
        console.log(user_name);
        console.log(room_name);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });

        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();