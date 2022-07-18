const path = require('path');

const directory = 'uploads';
const file_from_db = 'foto33';

const dir = path.join(__dirname, directory, file_from_db + '.png');

console.log(dir);

const basename = path.basename(dir, '.png');

console.log(basename);

const p =
	'/mnt/c/Users/edgar/OneDrive/Documentos/PowerCoders/powercoders/mod6-Node/dia-4/uploads/foto33.jpg';

// saca el diretorio d edonde esta el fichero
console.log(path.dirname(p));

// Saca la extension de un fichero
console.log(path.extname(p));
