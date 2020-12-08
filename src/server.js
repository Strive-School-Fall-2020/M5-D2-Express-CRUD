const express = require("express")
const cors = require("cors")
const usersRoutes = require("./services/users")

const server = express()

const port = 3001

server.use(cors())
server.use(express.json()) // I need to specify this line of code otherwise all the request bodies will be undefined. And this line of code must come BEFORE the routes

server.use("/users", usersRoutes)

server.listen(port, () => {
  console.log("Server is running on port: ", port)
})
