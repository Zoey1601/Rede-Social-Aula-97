//LINKS FIREBASE
const firebaseConfig = {

    apiKey: "AIzaSyBpjrmNanVMn8UK6tex_pY05q3_dguT3xs",

    authDomain: "rede-social-cami.firebaseapp.com",

    databaseURL: "https://rede-social-cami-default-rtdb.firebaseio.com",

    projectId: "rede-social-cami",

    storageBucket: "rede-social-cami.appspot.com",

    messagingSenderId: "175104113722",

    appId: "1:175104113722:web:b6273f8a2c2d50e7c50903"

};


//ADICIONE SEUS LINKS FIREBASE
firebase.initializeApp(firebaseConfig);
usuario = localStorage.getItem("userName");
sala = localStorage.getItem("roomName");
function send() {
    msg = document.getElementById("msg");
    firebase.database().ref(sala).push({
        name: usuario,
        message: msg,
        like: 0

    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebaseMessageId = childKey;
                messageData = childData;
                //Início do código

                //Fim do código
            }
        });
    });
}
getData();