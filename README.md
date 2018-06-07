## ToDo App

Aplicación de comandos en Node.js que almacena y gestiona estados de tareas por hacer en un archivo JSON local

## Pasos previos

Ejecutar ```$ npm install``` para instalar liberías.

## Comandos

| **Comando / Parámetro** | **Descripción** | **Ejemplo**|
| ------ | ------ | ------ |
| crear | Crea un elemento por hacer con estado a false por defecto | - |
| &nbsp;&nbsp;&nbsp;&nbsp;--descripcion, -d | *[Requerido]* Identificación de la tarea por hacer | ```$ node app crear -d "Hacer la compra"``` |
| actualizar | Actualiza el estado completado de una tarea | - |
| &nbsp;&nbsp;&nbsp;&nbsp;--descripcion, -d | *[Requerido]* Identificación de la tarea por hacer | ```$ node app actualizar -d "Hacer la compra"``` |
| &nbsp;&nbsp;&nbsp;&nbsp;--completado, -c | *[Opcional - Default: True]* Marca la tarea especificada como completada o como por hacer | ```$ node app actualizar -d "Hacer la compra" -c``` // ```$ node app actualizar -d "Hacer la compra" -c false``` |