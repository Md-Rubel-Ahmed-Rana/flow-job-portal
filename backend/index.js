require("dotenv").config();
require("./config/passport")
require("./config/database");
const app = require("./app")
const port = process.env.PORT || 5000;

const http = require("http");
const {Server} = require("socket.io");
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})


io.on("connection", (socket) =>{
    socket.on("handleQuery", (data) =>{
        console.log(data);
    })
})

// listen the app on a port
server.listen(port, () => {
    console.log(`Job Portal Server is running on port ${port}`)
})

module.exports = io