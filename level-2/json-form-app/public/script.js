let container = "";
const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const inputJsonData = document.getElementById("inputJsonData").value;

    try {
        const inputParseData = JSON.parse(inputJsonData);
        console.log(inputParseData);

        // POST the parsed data
        const request = await fetch("/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputParseData)
        });
        const response = await request.json();
        container = response;

        // Call the 'render' function to display the response
        render(container);
    } catch (error) {
        console.log(error);
        alert("Invalid! Please write valid JSON data.");
    }
});


// Rendering the input data in the 'formContainer'
function render(data) {
    const formContainer = document.getElementById("formContainer");
    formContainer.style.display = "block";
    formContainer.innerHTML = "";

    const form = document.createElement("form");
    for (let key in data) {
        const label = document.createElement("label");
        label.innerText = key;
        label.setAttribute("class", "output-label");

        const input = document.createElement("input");
        input.type = "text";
        input.name = key;
        input.value = data[key];
        input.readOnly = true;
        input.setAttribute("class", "output-input");

        const lineBreak = document.createElement("br");

        form.append(label, input, lineBreak);
    }

    formContainer.append(form);
}

