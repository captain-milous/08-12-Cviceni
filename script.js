let cisla = [];
let count = 0;

function addToArray(){
	count = cisla.push(document.getElementById("answ").value);
	document.getElementById("cisla").innerHTML = cisla;
}

function addRandom(){
	var random = Math.floor(Math.random() * 100);
	document.getElementById("answ").value = random;
	count = cisla.push(random);
	document.getElementById("cisla").innerHTML = cisla;
}

function setridit(){
	if(count == 0){
		document.getElementById("serazene").style.color = "red";
		document.getElementById("serazene").innerHTML = "Před setříděním, zadej čísla do listu!";
	} else if(count == 1){
		document.getElementById("serazene").style.color = "red";
		document.getElementById("btn-reset").style.display = "block";
		document.getElementById("serazene").innerHTML = "Jedno číslo snad seřazovat nebudu :/";
	} else {
		document.getElementById("heading").style.display = "block";
		document.getElementById("btn-reset").style.display = "block";
		document.getElementById("field").style.display = "none";
		document.getElementById("serazene").style.color = "black";
		quicksort(cisla);
		document.getElementById("serazene").innerHTML = cisla;
	}
}

function reset(){
	cisla = [];
	count = 0;
	document.getElementById("field").style.display = "block";
	document.getElementById("cisla").innerHTML = "";
	document.getElementById("heading").style.display = "none";
	document.getElementById("btn-reset").style.display = "none";
	document.getElementById("serazene").innerHTML = "";
}

function partition(arr, start, end){
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        	[arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        	pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

function quicksort(arr) {
    stack = [];
    stack.push(0);
    stack.push(arr.length - 1);
    while(stack[stack.length - 1] >= 0){
    	end = stack.pop();
        start = stack.pop();
        pivotIndex = partition(arr, start, end);
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}

