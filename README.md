# InvoiceGen

InvoiceGen is a web application designed to streamline invoice generation. It integrates the Invoice-Generator.com public API to provide a convenient way to create professional-looking invoices. It is presented as a full stack application, however you can use the backend with the provided frontend or integrate it into your own custom frontend application.

## Features

- **Simple Invoice Generation:** Easily generate invoices using structured data.
- **Flexible Integration:** Use the provided frontend or connect your own frontend to the backend API.
- **Powered by Invoice-Generator.com:** Leverages the robust Invoice-Generator.com API.
- **Server Options:** Choose between Fastify or Express for your backend server.

## Getting Started

### Prerequisites

1. **Node.js and npm:** Make sure you have Node.js and npm installed on your machine.
2. **Invoice-Generator.com Account:** Register an account on [Invoice-Generator.com](https://invoice-generator.com/) and obtain your API key from **Settings -> API Key -> New**.

### Installation

1. **Clone the Repository:**

   `git clone [url]`

2. **Install Dependencies**

   `cd InvoiceGen `  
    `npm install`

3. **Set Up Environment Variables**

   - Create a `.env` file in the /backend directory.
   - Add your Invoice-Generator.com API key:

     `API_KEY=your_api_key_here`

### Running the Server

- Make sure you're in the right directory:

  `cd backend/`

- Express Server:

  `npm run start`

- Fastify Server:

  `node fastify-server.js`

### Running the Client

- Make sure you're in the right directory:

`cd client/`

- Start the client (via Vite)

`npm run dev`

## API Endpoints

- **POST /generate-invoice:**
  - Generates an invoice in PDF format.
  - Expects structured invoice data in the request body (see `generateInvoicePlugin` in the backend code for the expected data structure).
  - Returns the generated invoice as a PDF attachment.

## Using with Your Own Frontend

1. **Fork/Clone this Repository.**
2. **Set up the Backend:** Follow the "Getting Started" instructions above.
3. **Build Your Frontend:** Connect your frontend application to the `/generate-invoice` endpoint to send invoice data and receive the generated PDF.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues.

## License

This project is licensed under the [MIT License](LICENSE).
