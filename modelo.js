class ModeloEmail{
	constructor(email){
		this.email = email;
	}

	validateEmail(){
		const ER = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
		return ER.test(this.email);
	}

}

class ModeloEntero{
	constructor(numero) {
		this.numero = numero;
	}

	ifNumber() {
		if(!isNaN(this.numero)) return true;
		else return false;
	}

	ifEntero() {
		if((this.numero%1) === 0) return true;
		else return false;
	}

	validateEntero(){
		if(this.ifNumber() && this.ifEntero()){
			const ER = /^-?\d+$/;
			return ER.test(this.numero);
		}else return false;
	}	
}

class ModeloReal{
	constructor(numero) {
		this.numero = numero;
	}

	isDecimal(){
		const ER = /^-?(0|[1-9]\d*)(\.\d+)?$/;
		return ER.test(this.numero);
	}

	isFraccion() {
		const ER = /^-?(0|[1-9]\d*)(\.\d+)?(e-?(0|[1-9]\d*))?$/i;
		return ER.test(this.numero);
	}

	isReal() {
		const Entero = new ModeloEntero(this.numero);
		const Notation = new ModeloNotacion(this.numero);

		if(Entero.validateEntero() || Notation.ifNotationScientific() || this.isFraccion() || this.isDecimal()) return true;
		else return false;
	}
}

class ModeloNotacion{
	constructor(numero) {
		this.numero = numero;
	}

	ifNotationScientific() {
		const ER = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
		return ER.test(this.numero);
	}
}