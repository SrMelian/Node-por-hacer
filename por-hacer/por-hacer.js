const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Algo pasó', err);
        } else {
            console.log('Todo correcto');
        }
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = (completado) => {
    cargarDB();
    let listadoNuevo;
    listadoNuevo = listadoPorHacer.filter((tarea) => tarea.completado === completado)
    return listadoNuevo;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

// 1.413ms
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

// 1.489ms más lento que el de arriba pero útil por el filter
// const borrar = (descripcion) => {
//     console.time('test');
//     cargarDB();
//     let nuevoListado = listadoPorHacer.filter((tarea) => tarea.descripcion !== descripcion);
//     if (listadoPorHacer.length === nuevoListado.length) {
//         console.timeEnd('test');
//         return false;
//     } else {
//         listadoPorHacer = nuevoListado;
//         guardarDB();
//         console.timeEnd('test');
//         return true;
//     }
// }

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}