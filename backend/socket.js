const room = require("./models/messageRoom")
const message = require('./models/messageModel')
const upload = require("./uploads/upload")


module.exports = function (io) {
    io.on("connection", (socket) => {
        socket.on("joinRoom", (data) => {
            socket.join(data.roomId)
            console.log("Client joined the room " + data.roomId)
        })

        socket.on("sendMessage", async (data) => {
            if (data.message) {
                const createMessage = new message(data)
                createMessage.save().then(function(message){
                    io.to(data.room).emit("receiveMessage", message)
                })
            }
        })

        socket.on("sendImage", async(req, data)=>{
            console.log(data)
            upload.single("image")
        })
    })

}


