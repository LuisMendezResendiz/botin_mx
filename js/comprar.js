function compra(){
	var tipo = sessionStorage.getItem('tipo');
	var estado = document.getElementById('estado').value;

	console.log(tipo);
	console.log(estado);

	try{
		var docRef = db.collection("estados").doc(estado);
		var num = 1;
		docRef.get().then(function(doc){
			if(doc.exists){
				//alert("El correo ya esta siendo en uso");
				db.collection('estados').doc(estado)
					.get().then(function(doc) {
						var actualizar = doc.data().conteo;
						actualizar = actualizar + 1;

				        db.collection('estados').doc(estado).update({
				        	conteo: actualizar
				        }).then(function(){

						}).catch(function(error){
							console.error(error);
						})
						compra2();

					}).catch(function(error) {
					    console.log("Error getting document:", error);
					});

			}else{
				db.collection("estados").doc(estado).set({
				    estado: estado,
				    conteo: num
				})
				.then(function(docRef) {
				    console.log("Document written with ID: ", docRef.estado);
				})
				//document.getElementById('conpass').value = '';
				compra2();
			}
		})
	}catch(error){
		var errorCode = error.code;
		var errorMessage = error.message;	
	}
}

function compra2(){
	var tipo = sessionStorage.getItem('tipo');

	console.log(tipo);

	try{
		var docRef = db.collection("paquetes").doc(tipo);
		var num = 1;
		docRef.get().then(function(doc){
			if(doc.exists){
				//alert("El correo ya esta siendo en uso");
				db.collection('paquetes').doc(tipo)
					.get().then(function(doc) {
						var actualizar2 = doc.data().numero;
						actualizar2 = actualizar2 + 1;

				        db.collection('paquetes').doc(tipo).update({
				        	numero: actualizar2
				        }).then(function(){

						}).catch(function(error){
							console.error(error);
						})

					}).catch(function(error) {
					    console.log("Error getting document:", error);
					});

			}else{
				db.collection("paquetes").doc(tipo).set({
				    tipo: tipo,
				    numero: num
				})
				.then(function(docRef) {
				    console.log("Document written with ID: ", docRef.tipo);
				})
				//document.getElementById('conpass').value = '';
			}
		})
	}catch(error){
		var errorCode = error.code;
		var errorMessage = error.message;	
	}
	alert("Compra realizada con exito")
}
