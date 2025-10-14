import { getBotResponse } from './eliza.js';

const DEBUG = false;
const log = (msg) => { if (DEBUG) console.log(msg); };


function showResponse(response) {
    addToChatWindow(response, 'bot');
}

function getResponse(message) {
    return getBotResponse(message);
}

function processMessage(message) {
    let response = getResponse(message);

    showResponse(response);
}


function addToChatWindow(message, speaker) {
    let chatWindow = document.getElementById('chat-window');
    const timeStamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const isUser = speaker === 'user';
    const avatar = isUser ? '👤' : '🤖'; // Use Profile if isUser is true, else use Robot

    chatWindow.innerHTML += `
                <div class="message ${isUser ? 'user-message' : 'bot-message'}">
                    <div class="message-header">
                        <span class="avatar">${avatar}</span>
                        <span class="timestamp">${timeStamp}</span>
                    </div>
                    <div class="message-content">
                        <p>${message}</p>
                    </div>
                </div>
            `;

    // Force scrolls to bottom after messages are added
    chatWindow.scrollTop = chatWindow.scrollHeight;
}


function send() {
    let messageBox = document.getElementById('message-box');
    let message = messageBox.value;

    let chatWindow = document.getElementById('chat-window');

    messageBox.value = ''; // clear the field
    messageBox.focus();

    addToChatWindow(message, 'user');

    processMessage(message);
}


function init() {
    log('Initializing chat interface');
    document.getElementById('send-button').addEventListener('click', function (event) {
        event.preventDefault();
        send();
    });
    document.getElementById('message-box').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            send();
        }
    });
}

window.addEventListener('DOMContentLoaded', init);