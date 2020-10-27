// dom queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim() // name or id on the input you can use the . notation

    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))
})

// class instances
const chatroom = new Chatroom('general', 'sam')
const chatUI = new ChatUI(chatList)

// get the chats and render
chatroom.getChats(data => chatUI.render(data)) // this gets invoked from the callback above