// adding new chat documents ✔️
// setting up a real-time listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room
        this.username = username
        this.chats = db.collection('chats')
    }
    // Methods
    async addChat(message) {
        // format a chat object to send to the database
        const now = new Date()
        const chat = {
            // es6 message: message
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        // save the chat document
        const response = await this.chats.add(chat)
        return response
    }
    getChats(callback) {
        this.chats
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        // update the ui
                        callback(change.doc.data()) // this invokes the function argument inside getChats on line 42
                    }
                })
            })
    }
}

const chatroom = new Chatroom('gaming', 'sam')

chatroom.getChats((data) => { // this gets invoked from the callback above
    console.log(data);
})