let main = [
	"hey",
	"what",
	"whatttt",
	"ihavenoideas",
	"noooo",
	"stopit",
	"stop",
];
let randomNumber = 0;
function getRandomWord() {
	randomNumber = Math.floor(Math.random() * main.length);
	console.log(main[randomNumber]);
	document.getElementById("view").innerHTML = main[randomNumber];
}
