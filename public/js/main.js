//encode
const input = document.querySelector("input[type=file]");
const img = document.querySelector("img");
const imgResult = document.querySelector("#result");
const textResult = document.querySelector("h6");
const text = document.querySelector("input[type=text]");
const button = document.querySelector("button");
//decode
const inputFile = document.querySelector("#decode-file");
const imgFile = document.querySelector("#decode-img");
const btnFile = document.querySelector("#decode-btn");
const message = document.querySelector("p");

//encode function
input.addEventListener("change",() => {
	const read = new FileReader();

	read.onload = () => {
		img.src = read.result;
	}

	read.readAsDataURL(input.files[0]);
});

button.addEventListener("click",() => {
	if(text.value == "") return alert("Please enter a text!");
	let mess = steg.encode(text.value,img);
	textResult.innerHTML = "Image is encoded succesfully..."
	imgResult.src= mess;
	text.value = "";
	alert("Encoded.. Tap on the image below to save");
});

//decode function

inputFile.addEventListener("change",() => {
	const read = new FileReader();

	read.onload = () => {
		imgFile.src = read.result;
	}

	read.readAsDataURL(inputFile.files[0]);
});

btnFile.addEventListener("click",() => {
	let mess = steg.decode(imgFile);
	if(mess){
		message.innerHTML = `${mess}`;
	} else {
		message.innerHTML = `No content found!`;
	}
});
