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
userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom() {
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose: "adicionar nome de sala"
  });

  localStorage.setItem("roomName", roomName);

  window.location = "kwitterPage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id=" + roomNames + " onclick='redirectToRoomName(this.id)' >#" + roomNames + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}
