const messageForm = document.querySelector('.message-form');
const messageText = document.querySelector('.message-text');


const paintMessage = (message) => {
    messageText.innerText = message;
    messageForm.classList.add('hidden');
    messageText.classList.remove('hidden');
}

const saveMessage = (message) => {
    localStorage.setItem('message', message);
}  

const setMessage = (event) => {
    event.preventDefault();
    message = event.target[0].value;
    if(message){
        saveMessage(message);
        paintMessage(message);
    }
}

window.addEventListener('load', () => {
    const message = localStorage.getItem('message');
    if(message){
        paintMessage(message);
    }
    else{
        return;
    }
});

messageForm.addEventListener('submit', setMessage);