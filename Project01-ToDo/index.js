const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./toDo/toDo');

let mostrarComandos = () => {
    console.log(colors.yellow('Comandos disponibles: '));
    console.log('\t > npm index.js', colors.yellow('crear'));
    console.log('\t > npm index.js', colors.yellow('listar'));
    console.log('\t > npm index.js', colors.yellow('actualizar'));
};

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // Vamos a crear la tarea
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listaTareas = toDo.getListado();

        console.log("========= ToDo ============".green);
        for (let tarea of listaTareas) {
            console.log('Descripcion: '.blue, tarea.descripcion);
            console.log('Estado:\t     '.blue, tarea.completado);
            console.log("===========================".green);
        }
        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log((actualizado) ? "Ha sido actualizada la tarea".yellow : "Surgió un error".red);
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Tu comando no es reconocido'.red);
        mostrarComandos();
        break;
}