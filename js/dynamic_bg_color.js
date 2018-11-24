var i = 0;

function changeColor(){
	if (i==0) {
		document.body.style.backgroundColor="#D842AE";
		i=1;
	} else if (i==1) {
		document.body.style.backgroundColor="#5EA8FF";
		i=2;
	} else if (i==2) {
		document.body.style.backgroundColor="#FC3B4B";
		i=0;
	} else if (i==2) {
		document.body.style.backgroundColor="#06C7FF";
		i=0;
	}
}