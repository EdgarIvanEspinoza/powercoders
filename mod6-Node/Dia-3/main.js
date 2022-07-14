function add(a, b) {
	return new Promise(function (resolve, reject) {
		if (a === 10 || b === 10) {
			return reject(new Error('No se sumar 10'));
		}

		if (a < 0 || b < 0) {
			return reject(new Error('No se sumar numero negativo'));
		}

		setTimeout(() => {
			resolve(a + b);
		}, 2000);
	});
}

function main() {
	add(-10, -1)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => console.log(error.message));
}

main();
