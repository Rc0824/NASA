document.addEventListener("DOMContentLoaded", function () {
    const responseTextarea = document.getElementById("modal-white");
    var content = document.getElementById("email_popup");
    const btn_pop = document.getElementById("submitButton_popup");

    // const responseParagraph = document.querySelector(".modal-dialog-scrollable p");
    const responseContainer = document.querySelector(".modal-dialog-scrollable p");

    btn_pop.onclick = function(e) {
        // change the placeholder text
        content.placeholder = "searching... please wait";
        content.classList.add("red-placeholder");
        content.style.fontWeight = "bold";
        e.preventDefault();
        // Get user input from the form
        const userInput = document.getElementById("email_popup").value;

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
                // responseTextarea.value = data.response;     
                console.log(data);
                const responseText = data.response;
                responseContainer.innerHTML += responseText +"<br>"+"<br>";
                modal.style.display = "block";
                // change the placeholder text back
                inputElement.placeholder = "Anything want to search?";
                // responseParagraph.textContent = data;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };              

});
