

const argv = require('./config/yargs').argv;

//destructuracion
const { crearArchivo, listarTablas } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTablas(argv.base, argv.limite);
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo}`))
            .catch(e => console.log(e));
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
}


