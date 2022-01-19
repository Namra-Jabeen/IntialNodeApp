const http = require("http");
const Todo = require("./controller");
const {getReqData} = require("./utils");
const PORT = 5000;

const server = http.createServer(async (req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write("Hello world");
        res.end();
    } else if (req.url === '/api/todos' && req.method === "GET") {
        const todos = await new Todo().listTodos();
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(todos));
    } else if (req.url.match(/\/api\/todos\/([0-9]+)/) && req.method === 'GET') {
        try {
            const id = req.url.split("/")[3];
            const todo = await new Todo().getTodo(id);
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(todo));
        } catch (error) {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message:error}));
        }
    } else if (req.url.match("/api/todos") && req.method === "POST") {
        let todoData = await getReqData(req)
        let createdTodo = await new Todo().createTodo(JSON.parse(todoData));
        res.end(JSON.stringify(createdTodo));
    }
});

server.listen(PORT,() => console.log(`Server started on port: ${PORT}`));