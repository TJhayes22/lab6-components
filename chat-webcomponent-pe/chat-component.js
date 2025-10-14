import { getBotResponse } from './eliza.js';

class SimpleChat extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="chat-header">
                <h1>Chat Assistant</h1>
                <p>Prototype: Web Component (PE)</p>
            </header>

            <main>
                <section id="chat-window" class="message-history">
                </section>
                <form id="chat-input-area">
                    <input id="message-box" type="text" placeholder="Type your message...">
                    <button id="send-button" type="button">Send</button>
                </form>
            </main>

            <chat-footer>
                <p>&#8505; This is a Web Component (PE)</p>
            </chat-footer>
        `;

        // Add event listeners
        const sendButton = this.querySelector('#send-button');
        this.messageBox = this.querySelector('#message-box');
        this.chatWindow = this.querySelector('#chat-window');

        sendButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.sendMessage();
        });

        this.messageBox.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.sendMessage();
            }
        });
    }

    sendMessage() {
        const message = this.messageBox.value.trim();
        if (message === '') return;

        this.addMessage('user', message);
        this.messageBox.value = '';
        this.messageBox.focus();

        const response = getBotResponse(message);
        this.addMessage('bot', response);
    }

    addMessage(speaker, text) {
        const timeStamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const isUser = speaker === 'user';
        const avatar = isUser ? '👤' : '🤖'; // Use Profile if isUser is true, else use Robot

        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        msgDiv.innerHTML = `
            <div class="message-header">
                <span class="avatar">${avatar}</span>
                <span class="timestamp">${timeStamp}</span>
            </div>
            <div class="message-content">
                <p>${text}</p>
            </div>
        `;

        this.chatWindow.appendChild(msgDiv);
        this.chatWindow.scrollTop = this.chatWindow.scrollHeight; // Scroll to bottom
    }
}
customElements.define('simple-chat', SimpleChat);