let cisla = [];
let count = 0;
console.log(cisla);
console.log(cisla.lenght);

function addToArray(){
	count = cisla.push(document.getElementById("answ").value);
	console.log(cisla);
	console.log(count);
	document.getElementById("cisla").innerHTML = cisla;
}

function setridit(){
	if(count == 0){
		document.getElementById("serazene").style.color = "red";
		document.getElementById("serazene").innerHTML = "Před setříděním, zadej čísla do listu!";
	} else if(count == 1){
		document.getElementById("serazene").style.color = "red";
		document.getElementById("serazene").innerHTML = "Jedno číslo snad seřazovat nebudu :/";
	} else {
		document.getElementById("heading").style.display = "block";
		document.getElementById("serazene").style.color = "black";
		document.getElementById("serazene").innerHTML = cisla;
	}
}