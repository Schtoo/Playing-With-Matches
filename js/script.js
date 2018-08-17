function randomNumber() {
	return Math.floor(Math.random() * (9 - 1) + 1);
}

function findDiv() {
	let numberOnScreen = document.querySelectorAll('.numbers');
	let messageElement = document.querySelector('.messageBox');
	for (let i = 0; i < numberOnScreen.length; i++) {
		let number = randomNumber();
		numberOnScreen[i].innerHTML = number;
	}

	if (numberOnScreen[0].innerHTML === numberOnScreen[1].innerHTML && numberOnScreen[1].innerHTML === numberOnScreen[2].innerHTML && numberOnScreen[0].innerHTML === numberOnScreen[2].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[0].classList.remove("numbers");
		numberOnScreen[1].classList.remove("numbers");
		numberOnScreen[2].classList.remove("numbers");
		numberOnScreen[0].classList.add("special");
		numberOnScreen[1].classList.add("special");
		numberOnScreen[2].classList.add("special");
	} else if (numberOnScreen[0].innerHTML === numberOnScreen[1].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[0].classList.remove("numbers");
		numberOnScreen[1].classList.remove("numbers");
		numberOnScreen[0].classList.add("match");
		numberOnScreen[1].classList.add("match");
	} else if (numberOnScreen[1].innerHTML === numberOnScreen[2].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[1].classList.remove("numbers");
		numberOnScreen[2].classList.remove("numbers");
		numberOnScreen[1].classList.add("match");
		numberOnScreen[2].classList.add("match");
	} else if (numberOnScreen[0].innerHTML === numberOnScreen[3].innerHTML && numberOnScreen[3].innerHTML === numberOnScreen[6].innerHTML && numberOnScreen[0].innerHTML === numberOnScreen[6].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[0].classList.remove("numbers");
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[0].classList.add("special");
		numberOnScreen[3].classList.add("special");
		numberOnScreen[6].classList.add("special");
	} else if (numberOnScreen[0].innerHTML === numberOnScreen[3].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[0].classList.remove("numbers");
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[0].classList.add("match");
		numberOnScreen[3].classList.add("match");
	} else if (numberOnScreen[3].innerHTML === numberOnScreen[6].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[3].classList.add("match");
		numberOnScreen[6].classList.add("match");
	} else if (numberOnScreen[1].innerHTML === numberOnScreen[4].innerHTML && numberOnScreen[4].innerHTML === numberOnScreen[7].innerHTML && numberOnScreen[1].innerHTML === numberOnScreen[7].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[1].classList.remove("numbers");
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[7].classList.remove("numbers");
		numberOnScreen[1].classList.add("special");
		numberOnScreen[4].classList.add("special");
		numberOnScreen[7].classList.add("special");
	} else if (numberOnScreen[1].innerHTML === numberOnScreen[4].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[1].classList.remove("numbers");
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[1].classList.add("match");
		numberOnScreen[4].classList.add("match");
	} else if (numberOnScreen[4].innerHTML === numberOnScreen[7].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[7].classList.remove("numbers");
		numberOnScreen[4].classList.add("match");
		numberOnScreen[7].classList.add("match");
	} else if (numberOnScreen[2].innerHTML === numberOnScreen[5].innerHTML && numberOnScreen[5].innerHTML === numberOnScreen[8].innerHTML && numberOnScreen[2].innerHTML === numberOnScreen[8].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[2].classList.remove("numbers");
		numberOnScreen[5].classList.remove("numbers");
		numberOnScreen[8].classList.remove("numbers");
		numberOnScreen[2].classList.add("special");
		numberOnScreen[5].classList.add("special");
		numberOnScreen[8].classList.add("special");
	} else if (numberOnScreen[2].innerHTML === numberOnScreen[5].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[2].classList.remove("numbers");
		numberOnScreen[5].classList.remove("numbers");
		numberOnScreen[2].classList.add("match");
		numberOnScreen[5].classList.add("match");
	} else if (numberOnScreen[5].innerHTML === numberOnScreen[8].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[5].classList.remove("numbers");
		numberOnScreen[8].classList.remove("numbers");
		numberOnScreen[5].classList.add("match");
		numberOnScreen[8].classList.add("match");
	} else if (numberOnScreen[2].innerHTML === numberOnScreen[4].innerHTML && numberOnScreen[4].innerHTML === numberOnScreen[6].innerHTML && numberOnScreen[2].innerHTML === numberOnScreen[6].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[2].classList.remove("numbers");
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[2].classList.add("special");
		numberOnScreen[4].classList.add("special");
		numberOnScreen[6].classList.add("special");
	} else if (numberOnScreen[2].innerHTML === numberOnScreen[4].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[2].classList.remove("numbers");
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[2].classList.add("match");
		numberOnScreen[4].classList.add("match");
	} else if (numberOnScreen[4].innerHTML === numberOnScreen[6].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[4].classList.add("match");
		numberOnScreen[6].classList.add("match");
	} else if (numberOnScreen[0].innerHTML === numberOnScreen[3].innerHTML && numberOnScreen[3].innerHTML === numberOnScreen[6].innerHTML && numberOnScreen[0].innerHTML === numberOnScreen[6].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[0].classList.remove("numbers");
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[0].classList.add("special");
		numberOnScreen[3].classList.add("special");
		numberOnScreen[6].classList.add("special");
	} else if (numberOnScreen[0].innerHTML === numberOnScreen[3].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[0].classList.remove("numbers");
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[0].classList.add("match");
		numberOnScreen[3].classList.add("match");
	} else if (numberOnScreen[3].innerHTML === numberOnScreen[6].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[3].classList.add("match");
		numberOnScreen[6].classList.add("match");
	} else if (numberOnScreen[3].innerHTML === numberOnScreen[4].innerHTML && numberOnScreen[4].innerHTML === numberOnScreen[5].innerHTML && numberOnScreen[3].innerHTML === numberOnScreen[5].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[5].classList.remove("numbers");
		numberOnScreen[3].classList.add("special");
		numberOnScreen[4].classList.add("special");
		numberOnScreen[5].classList.add("special");
	} else if (numberOnScreen[3].innerHTML === numberOnScreen[4].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";

		numberOnScreen[3].classList.remove("numbers");
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[3].classList.add("match");
		numberOnScreen[4].classList.add("match");
	} else if (numberOnScreen[4].innerHTML === numberOnScreen[5].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[4].classList.remove("numbers");
		numberOnScreen[5].classList.remove("numbers");
		numberOnScreen[4].classList.add("match");
		numberOnScreen[5].classList.add("match");
	} else if (numberOnScreen[6].innerHTML === numberOnScreen[7].innerHTML && numberOnScreen[7].innerHTML === numberOnScreen[8].innerHTML && numberOnScreen[6].innerHTML === numberOnScreen[8].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[7].classList.remove("numbers");
		numberOnScreen[8].classList.remove("numbers");
		numberOnScreen[6].classList.add("special");
		numberOnScreen[7].classList.add("special");
		numberOnScreen[8].classList.add("special");
	} else if (numberOnScreen[6].innerHTML === numberOnScreen[7].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";

		numberOnScreen[6].classList.remove("numbers");
		numberOnScreen[7].classList.remove("numbers");
		numberOnScreen[6].classList.add("match");
		numberOnScreen[7].classList.add("match");
	} else if (numberOnScreen[7].innerHTML === numberOnScreen[8].innerHTML) {
		messageElement.innerHTML = "Found matching numbers";
		numberOnScreen[7].classList.remove("numbers");
		numberOnScreen[8].classList.remove("numbers");
		numberOnScreen[7].classList.add("match");
		numberOnScreen[8].classList.add("match");
	} else {
		messageElement.innerHTML = "No match found";
		messageElement.classList.remove('messageBox');
		messageElement.classList.add('noMatch');
	}
}

findDiv();