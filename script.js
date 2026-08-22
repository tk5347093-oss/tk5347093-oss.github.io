const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");

function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("message", type);

    message.innerHTML = text;

    chatBox.appendChild(message);

    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {

    const text = userInput.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    userInput.value = "";

    setTimeout(() => {

        const reply = getBotReply(text);

        addMessage(reply, "bot");

    }, 700);
}

function quickMessage(text) {

    userInput.value = text;

    sendMessage();
}

function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }
}

function getBotReply(message) {

    const text = message.toLowerCase();

    if (
        text.includes("service") ||
        text.includes("services")
    ) {

        return `
        Hum ye services provide karte hain:<br><br>
        💻 Website Development<br>
        🤖 AI Chatbots<br>
        🎬 Video Editing<br>
        📱 Social Media Management
        `;

    }

    if (
        text.includes("price") ||
        text.includes("pricing") ||
        text.includes("cost")
    ) {

        return `
        Hamari pricing project ke according hoti hai. 💰<br><br>
        Aap apni requirement bata dein,
        hum aapko suitable package suggest kar denge.
        `;

    }

    if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("number")
    ) {

        return `
        📞 Phone: +92 XXX XXXXXXX<br>
        📧 Email: example@email.com<br><br>
        Hum jald aap se contact karenge.
        `;

    }

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("salam")
    ) {

        return `
        Wa Alaikum Assalam! 👋<br>
        Aap kaise hain? Main aapki help ke liye ready hoon.
        `;

    }

    return `
        Aapka message receive ho gaya. 😊<br><br>
        Main aapki requirement samajhne mein help kar sakta hoon.
        Aap apni requirement thori detail mein bata dein.
    `;
}