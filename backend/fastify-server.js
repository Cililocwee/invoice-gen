const fastify = require("fastify")({
  logger: true,
});

const generateInvoicePlugin = require("./plugins/generateInvoicePlugin");

fastify.register(require("@fastify/cors"), {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Type", "X-Custom-Header"],
  credentials: true,
  maxAge: 86400,
});

fastify.register(require("@fastify/env"), {
  confKey: "config",
  schema: {
    type: "object",
    required: ["API_KEY"],
    properties: {
      API_KEY: {
        type: "string",
      },
    },
  },
  dotenv: true,
});

// Default landing for backend
fastify.get("/", (req, res) => {
  res.send("This is the backend to InvoiceGen");
});

// Invoice Route
fastify.register(generateInvoicePlugin);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
