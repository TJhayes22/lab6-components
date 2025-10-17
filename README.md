# Lab 6 - Components

## Overview
This project implements a **chat assistant prototype** using **JavaScript** and **Web Components**. The lab demonstrates:

- Custom **Web Components** (`SimpleChat` and `ChatInterface`)  
- Dynamic chat interface with **user and bot messages**  
- Encapsulated styling using **Shadow DOM**  
- Use of **external bot logic** via `getBotResponse()` from `eliza.js`  

The purpose of this lab is to practice **DOM manipulation**, **custom elements**, **event handling**, and **component-based design**.

---

## GitHub Pages
**Live Demo:** [Link](https://tjhayes22.github.io/lab6-components/)  

---

## Approaches

### Prototype - Pure HTML and CSS
- Static mockup using only HTML and CSS to work out the interface design
- Simple to understand
- No interactivity 

### Approach 1 - DOM Manipulation
- `../chat-dom`
- Interactive chat built with vanilla JavaScript and standard DOM methods
- No encapsulation

### Approach 2 - Progressive Enhancement (SimpleChat Component)
- `../chat-webcomponent-pe`
- Basic Web Component  
- Chat window updates dynamically   
- Minimal encapsulation of styles  

### Approach 3 - Graceful Degradation (ChatInterface Component)
- `../chat-webcomponent-gd`
- Fully encapsulated with **Shadow DOM**  
- Same functionality as second approach but isolated styles  
- Better modularity and reusability  

---

## Reflections
Working through the different approaches highlighted the trade-offs between simplicity, interactivity, and encapsulation:

- The **Prototype** was useful for quickly designing the interface and visual layout without worrying about functionality. It helped clarify what elements were needed, but it lacked any interactivity.

- **Approach 1 (DOM Manipulation)** introduced interactivity using vanilla JavaScript. It was straightforward to implement dynamic messaging, but because styles were global, there was potential for conflicts in larger projects.

- **Approach 2 (SimpleChat Component)** demonstrated **progressive enhancement** by wrapping the chat functionality in a Web Component. It allowed the chat to update dynamically while providing minimal encapsulation, making the component more modular and reusable than the plain DOM version.

- **Approach 3 (ChatInterface Component)** used **graceful degradation** principles with **Shadow DOM**, fully encapsulating styles and structure. This approach maintained the same functionality as the previous one but prevented style conflicts and improved reusability, which would be essential for a scalable application.

Overall, building each approach reinforced the importance of **choosing the right balance between simplicity, interactivity, and maintainability**, and how Web Components can improve modularity in complex front-end projects. There is no right way of building this, but you have to know what you need to accomplish first before you choose a way to approach it. 


---

## Challenges and Limitations
- Handling **scrolling behavior** to always show the latest message  
- Styling **user vs bot messages** consistently  
- Input validation for empty messages  
- Shadow DOM isolation adds complexity for event handling
- Consistent styling of pages and spacing  

---

## Implementation Notes
- Both components use `getBotResponse` from `eliza.js`  
- Components are modular and can be added to any HTML page  
- Messages include timestamp and avatar icons  
- Keyboard support: pressing **Enter** submits messages  

---

## File Structure
```
lab6-components/
├── chat-dom/
│   ├── eliza.js
│   ├── index.html
│   ├── script.js
│   └── styles.css
│
├── chat-prototype-html-css/
│   ├── index.html
│   └── styles.css
│
├── chat-webcomponent-gd/
│   ├── chat-component.js
│   ├── eliza.js
│   └── index.html
│
├── chat-webcomponent-pe/
│   ├── chat-component.js
│   ├── eliza.js
│   ├── index.html
│   └── styles.css
│
├── .gitignore
├── index.html
├── LICENSE
├── README.md
└── styles.css
```

---

## Technologies Used
- HTML5 / CSS3  
- JavaScript (ES6 modules)  
- Web Components (`HTMLElement`, `Shadow DOM`)  
- DOM Manipulation & Event Handling  

---

## License
This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for
details.

---

## Author
Tyler Hayes