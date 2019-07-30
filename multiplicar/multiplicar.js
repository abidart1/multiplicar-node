
const fs = require('fs');

let crearArchivo = (base,limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            let res = base * i;

            data += `${base} * ${i} = ${res}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);

        });
    });

}

let listarTablas = (base,limite=10)=>{


    for (let i = 1; i <= limite; i++) {

        let res = base * i;

        console.log(`${base} * ${i} = ${res}`);
    }


}

module.exports = {
    crearArchivo,
    listarTablas
}




