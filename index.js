import inquirer from 'inquirer';
import chalk from 'chalk';
let todos = [];
let condition = true;
console.log(chalk.magenta.bold("\n\t Welcome to Saood's Todo List! \t\n"));
while (condition) {
    let addTodo = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.yellow("Enter your Todo")
        }
    ]);
    todos.push(addTodo.todo);
    console.log(`${addTodo.todo} Task added in Todo-List Successfully!`);
    let addMoreTodos = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todos?",
            default: "False"
        }
    ]);
    condition = addMoreTodos.addMore;
}
console.log(`Your Updated Todo-List: ${todos}`);
