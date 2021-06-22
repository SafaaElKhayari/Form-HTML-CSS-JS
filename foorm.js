const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit_butt =document.getElementById('submit');
let success1 =success2 =success3 =success4 = false ;

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	if(success1==success4==success2==success3==true){
		removeElementsByClass("form");

		//const newDiv = document.createElement("div");
		//const body=document.getElementsByTagName("body");
		//const newContent = document.createTextNode("Merci pour votre participation");
	  
		// add the text node to the newly created div
		//newDiv.appendChild(newContent);
		//newDiv.className ='validation';
		//body.appendChild(newDiv)
	
		var div = document.createElement('div');
		div.textContent = "votre inscription a bien été prise en compte";
		div.setAttribute('class', 'validation');
		document.body.appendChild(div);
		
	}
	else{
		checkInputs();
	}


});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();
	
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Le nom d\'utilisateur ne peut pas être vide ');
		success1=false;
	} else {
		setSuccessFor(username);
		success1=true;
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'L\email ne peut pas être vide');
		success2=false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'L\email est incorrect');
		success2=false;
	} else {
		setSuccessFor(email);
		success2=true;

	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Le mot de pass ne peut pas être vide');
		success3=false;
	} else {
		setSuccessFor(password);
		success3=true;
	}
	
	if(passwordValue2 === '') {
		setErrorFor(password2, 'La validation de mot de pass ne peut pas être vide');
		success4=false;
	} else if(passwordValue !== passwordValue2) {
		setErrorFor(password2, 'les deux mot de pass ne sont pas les mêmes');
		success4=false;
	} else{
		setSuccessFor(password2);
		success4=true
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'input-box error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'input-box success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}



