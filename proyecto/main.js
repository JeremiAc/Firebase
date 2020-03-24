
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxAC-8uvnHTrZTt0l1JR9a4-eS8p-Mzeo",
    authDomain: "contactform-3b836.firebaseapp.com",
    databaseURL: "https://contactform-3b836.firebaseio.com",
    projectId: "contactform-3b836",
    storageBucket: "contactform-3b836.appspot.com",
    messagingSenderId: "88692417568",
    appId: "1:88692417568:web:8d91661ce39c9a39ea4845"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');




document.getElementById('contactform').addEventListener('submit' , submitForm);

   function submitForm(e){e.preventDefault();
    var nombre = getInputVal ('nombre');
    var asunto = getInputVal ('asunto');
    var correo = getInputVal ('correo');
    
     
    saveMessage(nombre, asunto, correo);


    }

    function getInputVal(id){
        return document.getElementById(id)
        .Value;
    }

    function saveMessage(nombre, asunto, correo){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          nombre: nombre,
          asunto: asunto,
          correo: correo
          });
      }

    