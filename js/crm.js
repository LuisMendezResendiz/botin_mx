google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {

	var est = new Array();//Arreglo para estados
	est.push('Estado')
	var numEst = new Array();
	numEst.push('');

	var paq = new Array();//Arreglo para tipos
	paq.push('Tipo de Paquete')
	var numPaq = new Array();
	numPaq.push('');

	//SE LLENAN LOS ARREGLOS
	db.collection("estados").get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	        est.push(doc.id);
	        numEst.push(doc.data().conteo);
	    });

	    console.log(est);
	    console.log(numEst);
	    graf(est, numEst);
	});
	db.collection("paquetes").get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
	        paq.push(doc.id);
	        numPaq.push(doc.data().numero);
	    });
	    console.log(paq);
	    console.log(numPaq);
	    graf2(paq, numPaq);
	});
}

function graf(est, numEst){
	var data = google.visualization.arrayToDataTable([
		[est[0], est[1], est[2], est[3], est[4], est[5], est[6], est[7], est[8], est[9], est[10]],
		[numEst[0], numEst[1], numEst[2], numEst[3], numEst[4], numEst[5], numEst[6], numEst[7], numEst[8], numEst[9], numEst[10]]
	]);


	var options = {
	title : 'Compras por estado',
	vAxis: {title: 'Compras'},
	hAxis: {title: 'Estado'},
	seriesType: 'bars',
	colors: ['#05C7FF', '#479DE4', '#8874C8', '#D842AE', '#f3b49f']
	};

	var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}

function graf2(paq, numPaq){
	var data2 = google.visualization.arrayToDataTable([
		[paq[0], paq[1], paq[2], paq[3]],
		[numPaq[0], numPaq[1], numPaq[2], numPaq[3]]
	]);


	var options2 = {
	title : 'Compras por paquete',
	vAxis: {title: 'Compras'},
	hAxis: {title: 'Paquete'},
	seriesType: 'bars',
	series: {5: {type: 'line'}},
	colors: ['#05C7FF', '#479DE4', '#8874C8', '#D842AE', '#f3b49f']
	};

	var chart = new google.visualization.ComboChart(document.getElementById('chart_div2'));
	chart.draw(data2, options2);
}

