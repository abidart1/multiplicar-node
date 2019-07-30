

const opts ={
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiploicar',opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar',opts)
    .help()
    .argv;


module.export ={
    argv
}