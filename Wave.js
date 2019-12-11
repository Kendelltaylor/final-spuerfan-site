var a = document.getElementById("week1");
var b = document.getElementById("week2");
var c = document.getElementById("week3");
var d = document.getElementById("week4"); 
function changePicture1(){
	a.classList.add("week1pics");
} 

function changePicture2(){
	b.classList.add("week2pics");
} 
function changePicture3(){
	c.classList.add("week3pics");
} 

function changePicture4(){
	d.classList.add("week4pics");
}  

function playSound(){
	var audio = new Audio ('sound/buzz.mp3');
	audio.play();
}   

function titleReset(){
	a.classList.remove("week1pics");
	b.classList.remove("week2pics");
	c.classList.remove("week3pics"); 
	d.classList.remove("week4pics");
} 

