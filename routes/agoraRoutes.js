const { getRtmToken, getRtcToken } = require("../controllers/agoraController");

const getRtmtokenOpts = {
  schema: {
    body: {
      type: "object",
      required: ["appID"],
      required: ["appCertificate"],
      required: ["uid"],
      properties: {
        appID: { type: "string" },
        appCertificate: { type: "string" },
        uid: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          token: { type: "string" },
        },
      },
    },
  },
  handler: getRtmToken,
};
const getRtctokenOpts = {
  schema: {
    body: {
      type: "object",
      required: ["appID"],
      required: ["appCertificate"],
      required: ["uid"],
      required: ["channelName"],
      properties: {
        appID: { type: "string" },
        appCertificate: { type: "string" },
        uid: { type: "string" },
        channelName: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          token: { type: "string" },
        },
      },
    },
  },
  handler: getRtcToken,
};

function agoraRoutes(fastify, options, done) {
  fastify.post("/rtmtoken", getRtmtokenOpts);

  fastify.post("/videotoken", getRtctokenOpts);

  done();
}

module.exports = agoraRoutes;
