import {Server} from "socket.io";
const handleVisit = (req, res) =>{
  // to prevent recreation again and again
  if(res.socket.server.io)
    console.log("New user connected")

  else{
    const io = new Server(res.socket.server)
    res.socket.server.io = io;
    io.on('connect', (socket)=>{
        console.log("New user visited")
    })
  }

  res.end();
}

export default handleVisit