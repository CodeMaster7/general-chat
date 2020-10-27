// dom queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMessg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms')

// add a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = newChatForm.message.value.trim() // name or id on the input you can use the . notation

    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))
})

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault()
    const newName = newNameForm.name.value.trim()

    // update name via the chatroom
    chatroom.updateName(newName)
    // reset the form
    newNameForm.reset()
    // show then hide the update message after a few seconds
    updateMessg.innerText = `Your name was updated to ${newName}`
    setTimeout(() => updateMessg.innerText = '', 3000)
})

// update the chat room
rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON') {
        chatUI.clear()
        chatroom.updateRoom(e.target.getAttribute('id'))
        chatroom.getChats(chat => chatUI.render(chat))
    }
})

// check localstorage for a name
const username = localStorage.username ? localStorage.username : 'Anonymous'

// class instances
const chatroom = new Chatroom('general', username)
const chatUI = new ChatUI(chatList)

// get the chats and render
chatroom.getChats(data => chatUI.render(data)) // this gets invoked from the callback above