const { add, substract, multiply, divide } = require('./lib/operation');
const translation = require('./lib/translation');

const valid_operations = ['suma', 'resta', 'multiplica', 'divide'];

// Detectar idioma del resultado
const language = process.env.LANG === 'en' ? 'en' : 'es';

// Desestructuro los argumentos en constantes
const args = process.argv.slice(2);
const [operation, valueA, valueB] = args;

// Si falta algun argumento salgo del programa
if (!operation || !valueA || !valueB) {
	console.error('Faltan argumentos');
	process.exit(1);
}

// Si la operacion no es conocida salgo del programa
if (!valid_operations.includes(operation)) {
	console.error('No reconozco la operacion');
	process.exit(1);
}

// Convierto a numeros los argumentos
const a = Number(valueA);
const b = Number(valueB);

// Reviso si son numeros los argumentos
if (isNaN(a) || isNaN(b)) {
	console.error('Los valores no son numericos');
	process.exit(1);
}

// Calculo el resultado;
let result;

switch (operation) {
	case 'suma':
		result = add(a, b);
		break;
	case 'resta':
		result = substract(a, b);
		break;
	case 'multiplica':
		result = multiply(a, b);
		break;
	case 'divide':
		result = divide(a, b);
		break;
}

//Comprobamos que el resultado no sea indeterminado
if (isNaN(result)) {
	console.error('El resultado es indeterminado');
	process.exit();
}

//Comprobamos que el resultado no sea infinito
if (!isFinite(result)) {
	console.error('El resultado es infinito o menos infinito');
	process.exit();
}

if (language === 'es') {
	//espanol
	console.log(
		`El resultado de ${translation[operation][language]} ${a} y ${b} es ${result}`
	);
} else {
	//ingles
	console.log(
		`The result of ${translation[operation][language]} ${a} and ${b} is ${result}`
	);
}
