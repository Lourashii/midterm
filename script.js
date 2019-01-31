var n2 = "";
var sign = "";

function erase(){
	document.getElementById("display").value = "";
	}
function add(){
	n2 = document.getElementById("display").value;
	document.getElementById("display").value = "";
	sign = "+";	
	}
function subtract(){
	n2 = document.getElementById("display").value;
	document.getElementById("display").value = "";
	sign = "-";		
	}
function multiply(){
	n2 = document.getElementById("display").value;
	document.getElementById("display").value = "";
	sign = "*";		
	}
function divide(){
	n2 = document.getElementById("display").value;
	document.getElementById("display").value = "";
	sign = "/";		
	}


function equals(){
	let n1 = document.getElementById("display").value;
	if (sign == "+"){
		document.getElementById("display").value = Math.round((parseFloat(n1) + parseFloat(n2))*100)/100;
		sign = "";
		}
	if (sign == "-"){
		document.getElementById("display").value = Math.round((parseFloat(n2) - parseFloat(n1))*100)/100;
		sign = "";
		}
	if (sign == "*"){
		document.getElementById("display").value = Math.round((parseFloat(n2) * parseFloat(n1))*100)/100;
		sign = "";
		}
	if (sign == "/"){
		document.getElementById("display").value = Math.round((parseFloat(n2) / parseFloat(n1))*100)/100;
		sign = "";		
		}
	}


function one(){
	document.getElementById("display").value += "1";
	}
function two(){
	document.getElementById("display").value += "2";
	}
function three(){
	document.getElementById("display").value += "3";
	}
function four(){
	document.getElementById("display").value += "4";
	}
function five(){
	document.getElementById("display").value += "5";
	}
function six(){
	document.getElementById("display").value += "6";
	}
function seven(){
	document.getElementById("display").value += "7";
	}
function eight(){
	document.getElementById("display").value += "8";
	}
function nine(){
	document.getElementById("display").value += "9";
	}
function zero(){
	document.getElementById("display").value += "0";
	}
function dot(){
	document.getElementById("display").value += ".";
	}