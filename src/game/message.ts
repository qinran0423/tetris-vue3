
import { io } from 'socket.io-client'


let socket
export function initMessage() {
  socket = io("http://localhost:3001")

  socket.on("connect", () => {
    console.log("链接成功"); // x8WIv7-mJelg7on_ALbx
  });

}


// emit on
export const message = {
  emit(...args) {
    return socket.emit(...args)
  },
  on(...args) {
    return socket.on(...args)
  },
}