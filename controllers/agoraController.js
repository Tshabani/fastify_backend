const { RtmTokenBuilder, RtcTokenBuilder } = require("agora-access-token");

const expirationTimeInSeconds = 3600 * 24;
const currentTimestamp = Math.floor(Date.now() / 1000);
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

const getRtmToken = (req, reply) => {
  const { appID, appCertificate, uid } = req.body;
  const token = RtmTokenBuilder.buildToken(
    appID,
    appCertificate,
    uid,
    1000,
    privilegeExpiredTs
  );
  const accessToken = {
    token: token,
  };

  reply.send(JSON.stringify(accessToken));
};
const getRtcToken = (req, reply) => {
  const { appID, appCertificate, uid, channelName } = req.body;
  const token = RtcTokenBuilder.buildTokenWithUid(
    appID,
    appCertificate,
    channelName,
    uid,
    1000,
    privilegeExpiredTs
  );
  const accessToken = {
    token: token,
  };

  reply.send(JSON.stringify(accessToken));
};
module.exports = {
  getRtmToken,
  getRtcToken,
};
