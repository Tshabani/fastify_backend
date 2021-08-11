require("dotenv").config();

const fastify = require("fastify")({ logger: true });

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/",
  swagger: {
    info: {
      title: "Agora-Token-api",
    },
  },
});

fastify.register(require("./routes/agoraRoutes"));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
