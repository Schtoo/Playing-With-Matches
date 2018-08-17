function randomNumber() {
	return Math.floor(Math.random() * (9 - 1) + 1);
}
function findDiv() {
	let numberOnScreen = document.querySelectorAll('.numbers');
	for (let i = 0; i < numberOnScreen.length; i++) {
		let number = randomNumber();
		numberOnScreen[i].innerHTML = number;
	}
}
function matchTwo(n1, n2) {
	let numberOnScreen = document.querySelectorAll('.numbers');
	let messageElement = document.querySelector('.messageBox');
	if (numberOnScreen[n1].innerHTML === numberOnScreen[n2].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[n1].classList.add("match");
		numberOnScreen[n2].classList.add("match");
	}
}
function matchThree(n1, n2, n3) {
	let numberOnScreen = document.querySelectorAll('.numbers');
	let messageElement = document.querySelector('.messageBox');
	if (numberOnScreen[n1].innerHTML === numberOnScreen[n2].innerHTML && numberOnScreen[n2].innerHTML === numberOnScreen[n3].innerHTML && numberOnScreen[n1].innerHTML === numberOnScreen[n3].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[n1].classList.add("special");
		numberOnScreen[n2].classList.add("special");
		numberOnScreen[n3].classList.add("special");
	}
}
findDiv();
matchTwo(0, 1);
matchTwo(1, 2);
matchThree(0, 1, 2);
matchTwo(3, 4);
matchTwo(4, 5);
matchThree(3, 4, 5);
matchTwo(6, 7);
matchTwo(7, 8);
matchThree(6, 7, 8);
matchTwo(0, 3);
matchTwo(3, 6);
matchThree(0, 3, 6);
matchTwo(1, 4);
matchTwo(4, 7);
matchThree(1, 4, 7);
matchTwo(2, 5);
matchTwo(5, 8);
matchThree(2, 5, 8);
matchTwo(0, 4);
matchTwo(4, 8);
matchThree(0, 4, 8);
matchTwo(2, 4);
matchTwo(4, 6);
matchThree(2, 4, 6);