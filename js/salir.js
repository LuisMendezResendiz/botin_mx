function comprobar(){
	var correo = sessionStorage.getItem("correo");
	var lout = document.getElementById('nav');
	firebase.auth().onAuthStateChanged(function(user){
	  if (user) {
	    lout.innerHTML += "<li><a onclick='salir()' style='cursor: pointer;'>Salir</a></li>";
	    
	    // User is signed in.
	  	var displayName = user.displayName;
	    var email = user.email;
	    var emailVerified = user.emailVerified;
	    var photoURL = user.photoURL;
	    var isAnonymous = user.isAnonymous;
	    var uid = user.uid;
	    var providerData = user.providerData;
	    // ...
	  } else {
	    // User is signed out.
	    console.log("No existe un usuario activo")
	    // ...
	  }
	});
}

function salir(){
	firebase.auth().signOut().then(function() {
  		// Sign-out successful.
  		// alert("Sesion cerrada");
  		sessionStorage.clear();
  		alert("Se ha cerrado la sesión");
	    location.href = "index.html";

	}).catch(function(error) {
		// An error happened.
		console.log(error);
	});
}