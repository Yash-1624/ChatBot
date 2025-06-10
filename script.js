 // Get the necessary elements
        const chatBox = document.getElementById("chat-box");
        const userInput = document.getElementById("user-input");
        const sendBtn = document.getElementById("send-btn");

        // When the Send button is clicked, send the message
        sendBtn.addEventListener("click", function () {
            sendMessage();
        });

        // When the Enter key is pressed, send the message
        userInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });

        // Function to send the message
        function sendMessage() {
            const message = userInput.value.trim(); // Get the text the user typed
            if (message !== "") { // If the message is not empty
                addMessage("user", message); // Display the user's message
                userInput.value = ""; // Clear the input field
                botReply(message); // Make the bot reply
            }
        }

        // Function to display the message in the chat box
        function addMessage(sender, text) {
            const div = '<div class="' + sender + '"><div>' + text + '</div></div>';
            chatBox.innerHTML += div; // Add the message to the chat box
            chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        }

        // Basic bot replies using simple if-else statements
        function botReply(message) {
            let reply = "I don't understand."; // Default reply if nothing matches

            // Convert the message to lowercase to handle case-insensitivity
            message = message.toLowerCase();

            // If the message contains specific words, the bot replies
            if (message === "hello" || message === "hi") {
                reply = "Hello! How can I help you?";
            } else if (message === "how are you") {
                reply = "I'm doing great, thank you!";
            } else if (message === "good morning") {
                reply = "Good Morning! Have a nice day!";
            } else if (message === "bye") {
                reply = "Goodbye! Have a great day!";
            }

            // Display the bot's reply with a slight delay
            setTimeout(function () {
                addMessage("bot", reply);
            }, 500);
        }