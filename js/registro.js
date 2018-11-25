function registrar(){
	var nombre = document.getElementById('user').value;
	var correo = document.getElementById('email').value;
	var pass = document.getElementById('pass').value;
	//var pass2 = document.getElementById('conpass').value;

	console.log(nombre);
	console.log(correo);
	console.log(pass);

	if(pass.length>=6){
		//if(pass == pass2){
			try{
				firebase.auth().createUserWithEmailAndPassword(correo, pass);

				var docRef = db.collection("usuarios").doc(correo);
				docRef.get().then(function(doc){
					if(doc.exists){
						alert("El correo ya esta siendo en uso");
					}else{
						db.collection("usuarios").doc(correo).set({
						    usuario: nombre,
						    correo: correo,
						    contra: pass
						})
						.then(function(docRef) {
						    console.log("Document written with ID: ", docRef.correo);
						})

						alert("Registro realizado con exito");
						document.getElementById('user').value = '';
						document.getElementById('email').value = '';
						document.getElementById('pass').value = '';
						//document.getElementById('conpass').value = '';
					}
				})
			}catch(error){
				var errorCode = error.code;
		  		var errorMessage = error.message;	
			}
		/*}else{
			alert("Las contraseñas no coinciden");
		}*/
	}else{
		alert("La contraseña debe tener al manos 6 caracteres");
	}
}