//bring in temp data
const data = require("./data");

class Controller {
    //getting all todos
    async listTodos() {
        return new Promise((resolve,_)=> resolve(data));
    }
}
module.exports = Controller;