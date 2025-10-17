import { getBotResponse } from './eliza.js';

const DEBUG = false;
const log = (msg) => { if (DEBUG) console.log(msg); };

/**
 * Displays the bot's response in the chat window.
 * @param {string} response - The response text from the bot
 */
function showResponse(response) {
    addToChatWindow(response, 'bot');
}

/**
 * Gets the bot's response for a given user message.
 * @param {string} message - The user's message
 * @returns {string} The bot's response
 */
function getResponse(message) {
    return getBotResponse(message);
}

/**
 * Processes a user's message: gets the bot response and displays it.
 * @param {string} message - The user's message
 */
function processMessage(message) {
    let response = getResponse(message);

    showResponse(response);
}

/**
 * Adds a message to the chat window.
 * @param {string} message - The message to display
 * @param {'user' | 'bot'} speaker - Who sent the message
 */
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

/**
 * Sends the user's message: adds it to chat window and processes it.
 */
function send() {
    let messageBox = document.getElementById('message-box');
    let message = messageBox.value;

    let chatWindow = document.getElementById('chat-window');

    messageBox.value = ''; // clear the field
    messageBox.focus();

    addToChatWindow(message, 'user');

    processMessage(message);
}

/**
 * Initializes the chat interface: sets up event listeners for send button and Enter key.
 */
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

// Initialize chat interface when DOM is fully loaded
window.addEventListener('DOMContentLoaded', init);