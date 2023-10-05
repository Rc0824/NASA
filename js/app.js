document.addEventListener("DOMContentLoaded", function () {
    const chatForm = document.getElementById("chat-form");
    const responseTextarea = document.getElementById("response");

    chatForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get user input from the form
        const userInput = document.getElementById("mytext").value;

        // Send a POST request to your Flask server
        fetch("http://127.0.0.1:5000/app/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ question: userInput }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Display the response in the textarea
                responseTextarea.value = data.response;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
