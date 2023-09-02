// Import required modules
const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.static(__dirname + "/public"));

// Route for serving the main HTML page
app.get("/", (req, res) => {
    res.sendFile(__dirname, "public", "index.html"); // Send the main HTML file
});

// Route for handling POST requests
app.post("/post", (req, res) => {
    try {
        const payload = req.body; // Get the JSON payload from the request body
        if (typeof payload === "object" && payload !== null) {
            res.status(200).json(payload);
        } else {
            res.status(400).json({ error: 'Invalid JSON format, Please write correct JSON format.' }); // Handle invalid JSON format
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error!' }); // Handle internal server error
    }
});

// Start the server on the specified port
app.listen(PORT, () => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
    } catch (error) {
        console.error(error.message); // Log any errors that occur during server startup
    }
});
