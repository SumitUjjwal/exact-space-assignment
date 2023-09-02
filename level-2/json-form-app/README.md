# JSON Form App

## Overview

This assignment contains 'json-form-app,' a purposeful tool designed for JSON data validation and graceful formatting. With a straightforward interface, users can efficiently input JSON data, and the application takes care of the validation and rendering process. This project offers an opportunity to explore the seamless transformation of data while maintaining a minimalist and professional approach.

## Deployment

'json-form-app' has been deployed on [render](https://render.com/). You can access it [here](https://json-form-app-wmsc.onrender.com).


## Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Installation

To run 'json-form-app' locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd level-2/json-form-app/
   ```

2. **Build the Docker Image:**

    ```bash
    docker build -t json-form-app .
    ```

3. **Run the Docker Container:**

    ```bash
    docker run -p 3000:3000 json-form-app
    ```

4. **Access the Application:**

    Open your web browser and navigate to **http://localhost:3000** to use the 'json-form-app' interface.
