document.addEventListener("DOMContentLoaded", function() {
    const chatOutput = document.getElementById("chat-output");
    const userInput = document.getElementById("user-input");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function() {
        const userMessage = userInput.value;
        appendMessage("You: " + userMessage);

        // Здесь вы можете отправлять запрос к вашему бэкенду и получать ответ от чат-бота

        // Пример ответа от чат-бота
        const botResponse = "Подключите АПИ";

        appendMessage("Bot: " + botResponse);

        // Очистить поле ввода
        userInput.value = "";
    });

    function appendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.innerText = message;
        chatOutput.appendChild(messageElement);
    }
});