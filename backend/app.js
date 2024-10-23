const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const multer = require('multer')
dotenv.config()
app.use(cors())


// to receive body data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())


// display all the req in terminal
// app.use(morgan('combined'))

// import databse

const { Server } = require('socket.io');
const http = require('http');
const upload = require('./uploads/upload');
const ups = require('./ups/upload')

app.use(express.static(__dirname + '/'))

// for user route
const userRoute = require('./routes/user')
app.use(userRoute)

const messageRoute = require('./routes/messageRouter')
app.use(messageRoute)

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.status(200).json({})
  }
  next()
})


// for making connection with front-end

// const server = require('./serverSetup')
const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

require('./socket')(io)

// This is the code to send image or files via socket.io
const message = require('./models/messageModel');

app.post('/send-image', ups.single('image'), function (req, res) {

    var messageData = req.body
    messageData.image = req.file.path
    console.log(req.file.path)
    const createMessage = new message(messageData)
    createMessage.save().then(function (message) {
        io.to(messageData.room).emit("receiveMessage", message)
    })
    res.json({ success: true })
})

// for server : port and host
const port = 5000
const host = 'localhost'
server.listen(port, host, () => {
  console.log(`Server is listening at ${host}:${port}`)
})
