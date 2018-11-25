function login(){
	var correo = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;

	firebase.auth().signInWithEmailAndPassword(correo, pass).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	});

	//comprobar();
}


function comprobar(){
	var correo = document.getElementById('user').value;
	firebase.auth().onAuthStateChanged(function(user){
	  if (user) {
	  	sessionStorage.setItem('correo', correo);
	    location.href = "index.html";
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