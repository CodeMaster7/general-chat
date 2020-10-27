// dom queries
const chatList = document.querySelector('.chat-list')

// class instances
const chatroom = new Chatroom('general', 'sam')
const chatUI = new ChatUI(chatList)

// get the chats and render
chatroom.getChats(data => chatUI.render(data)) // this gets invoked from the callback above