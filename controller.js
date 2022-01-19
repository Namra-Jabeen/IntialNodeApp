//bring in temp data
const data = require("./data");

class Controller {
    //getting all todos
    async listTodos() {
        return new Promise((resolve, _) => resolve(data));
    }

    async getTodo(id) {
        return new Promise((resolve, reject) => {
            let todo = data.find((todo) => todo.id === parseInt(id));
            if (todo) {
                resolve(todo)
            } else {
                reject(`Todo with id ${id} not found`);
            }
        });
    };

    async createTodo(todo) {
        return new Promise((resolve,_) => {
            let newTodo = {
                id:Math.floor(4+Math.random()*10),
                    ... todo,
            }
            resolve(newTodo);
        });

    }
};
module.exports = Controller;