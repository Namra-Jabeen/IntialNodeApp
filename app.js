const http = require("http");
const Todo = require("./controller");

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
    }

});

server.listen(PORT,() => console.log(`Server started on port: ${PORT}`));