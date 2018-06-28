## ToDo App

Console app in Node.js, store and manage task status in a local JSON

## Previous steps

Run the command ```$ npm install``` to install the packages

## Commands

| **Command / Param** | **Description** | **Example**|
| ------ | ------ | ------ |
| crear | Create an element ToDo with a default false status | - |
| &nbsp;&nbsp;&nbsp;&nbsp;--descripcion, -d | *[Required]* Task ToDo identifier | ```$ node app crear -d "Buy bread"``` |
| actualizar | Update the completed status of a task | - |
| &nbsp;&nbsp;&nbsp;&nbsp;--descripcion, -d | *[Required]* Task ToDo identifier | ```$ node app actualizar -d "Buy bread"``` |
| &nbsp;&nbsp;&nbsp;&nbsp;--completado, -c | *[Opcional - Default: True]* Set the specified task as completed or ToDo | ```$ node app actualizar -d "Buy bread" -c``` // ```$ node app actualizar -d "Buy bread" -c false``` |