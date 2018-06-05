const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer',
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea',
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado,
    })
    .command('borrar', 'Elimina un elemento por hacer.', {
        descripcion
    })
    .command('listar', 'Lista los elementos por hacer.', {
        completado: {
            alias: 'c',
            default: false,
            desc: 'True para mostrar las tareas completadas.',
        },
    })
    .help()
    .argv;

module.exports = {
    argv,
}
