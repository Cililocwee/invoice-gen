// import Fastify from "fastify";
const fastify = require("fastify")({
  logger: true,
});

const generateInvoicePlugin = require("./plugins/generateInvoice");

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

fastify.get("/", (req, res) => {
  res.send("Hello world");
});

fastify.register(generateInvoicePlugin);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
