let container = ""; // Initialize a variable to store response data
const form = document.getElementById("form"); // Get the form element by its ID

// Add a submit event listener to the form
form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const inputJsonData = document.getElementById("inputJsonData").value; // Get the JSON data from the textarea

    try {
        const inputParseData = JSON.parse(inputJsonData); // Parse the JSON data
        // console.log(inputParseData);

        // POST the parsed data to the server
        const request = await fetch("/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputParseData)
        });

        const response = await request.json(); // Parse the response as JSON
        container = response; // Store the response data in the 'container' variable

        // Call the 'render' function to display the response data
        render(container);
    } catch (error) {
        // console.log(error);
        alert("Invalid JSON format! Please enter valid JSON data."); // Display an alert for invalid JSON data
    }
});

// Rendering the input data in the 'formContainer'
function render(data) {
    const formContainer = document.getElementById("formContainer"); // Get the form container element
    formContainer.style.display = "block"; // Make the form container visible
    formContainer.innerHTML = ""; // Clear any previous content

    const form = document.createElement("form"); // Create a new form element
    for (let key in data) {
        const label = document.createElement("label"); // Create a label for each key
        label.innerText = key;
        label.setAttribute("class", "output-label");

        const input = document.createElement("input"); // Create an input field for each value
        input.type = "text";
        input.name = key;
        input.value = data[key];
        input.readOnly = true;
        input.setAttribute("class", "output-input");

        const lineBreak = document.createElement("br"); // Create a line break

        form.append(label, input, lineBreak); // Append the label, input, and line break to the form
    }

    formContainer.append(form); // Append the form to the form container
}
