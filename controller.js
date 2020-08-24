function main(evt) {
	evt.preventDefault();
	validateEmail();
	validateEntero();
	validateNotationScientific();
	validateReal();
}

function validateEmail() {	
	var email = document.getElementById('Email').value.trim();
	var span = document.getElementById('emailHelp');
	span.innerHTML = '';
	
	if(email.length > 0){
		const Email = new ModeloEmail(email);

		if(Email.validateEmail()){
			span.innerHTML = 'Es un Email válido';
			span.classList.add('text-success');
			span.classList.remove('text-danger');
		}else{
			span.innerHTML = 'No es un Email Váildo';
			span.classList.add('text-danger');
			span.classList.remove('text-success');
		}
	}else {
		span.innerHTML = '';
	}
	
}

function validateEntero() {
	var entero = document.getElementById('Entero').value.trim();
	var span = document.getElementById('enteroHelp');
	span.innerHTML = '';
	

	if(entero.length > 0){
		const Entero = new ModeloEntero(entero);

		if(Entero.validateEntero()){
			span.innerHTML = 'Entero válido';
			span.classList.add('text-success');
			span.classList.remove('text-danger');
		}else {
			span.innerHTML = 'Entero inválido.';
			span.classList.add('text-danger');
			span.classList.remove('text-success');
		}
	}else {
		span.innerHTML = '';
	}
}

function validateNotationScientific() {
	var notation = document.getElementById('Notation').value.trim();
	var span = document.getElementById('notationHelp');
	span.innerHTML = '';
	
	if(notation.length > 0){
		const Notation = new ModeloNotacion(notation);

		if(Notation.ifNotationScientific()){
			span.innerHTML = 'Es una expresion de notación cientifica.';
			span.classList.add('text-success');
			span.classList.remove('text-danger');
		}else {
			span.innerHTML = 'Expresión no válida.';
			span.classList.add('text-danger');
			span.classList.remove('text-success');
		}
	}else {
		span.innerHTML = '';
	}
}

function validateReal(){
	var real = document.getElementById('Real').value.trim();
	var span = document.getElementById('realHelp');
	span.innerHTML = '';
	

	if(real.length > 0){
		const Notation = new ModeloReal(real);

		if(Notation.isReal()){
			span.innerHTML = 'Es un número real.';
			span.classList.add('text-success');
			span.classList.remove('text-danger');
		}else {
			span.innerHTML = 'No es un número real.';
			span.classList.add('text-danger');
			span.classList.remove('text-success');
		}
	}else {
		span.innerHTML = '';
	}
	
}