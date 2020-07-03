/**
 *  Voice Token
 *
 *  This Function shows you how to mint Access Tokens for Twilio Voice Client. Please note, this is for prototyping purposes
 *  only. You will want to validate the identity of clients requesting Access Token in most production applications and set
 *  the identity when minting the Token.
 */

exports.handler = function(context, event, callback) {
  // REMINDER: This identity is only for prototyping purposes
  // Per https://www.twilio.com/docs/runtime/functions/invocation#event-object GET and POST collapsed into event
  //var primary = context.PRIMARY_PHONE_NUMBER ? context.PRIMARY_PHONE_NUMBER || 'There is no primary number';
  var caller_id = event.caller_id || 'Macalester Generic Caller';
  const IDENTITY = event.caller_id || 'Generic Caller';

  const ACCOUNT_SID = context.ACCOUNT_SID;

  // set these values in your .env file
  const TWIML_APPLICATION_SID = context.TWIML_APPLICATION_SID;
  const API_KEY = context.API_KEY;
  const API_SECRET = context.API_SECRET;

  const AccessToken = Twilio.jwt.AccessToken;
  const VoiceGrant = AccessToken.VoiceGrant;

  const accessToken = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET);
  accessToken.identity = IDENTITY;
  const grant = new VoiceGrant({
    outgoingApplicationSid: TWIML_APPLICATION_SID,
    incomingAllow: true
  });
  accessToken.addGrant(grant);

  const response = new Twilio.Response();

  // Uncomment these lines for CORS support
  response.appendHeader('Access-Control-Allow-Origin', 'https://engage.macalester.edu');
  response.appendHeader('Access-Control-Allow-Methods', 'GET');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');

  response.appendHeader("Content-Type", "application/json");
  response.setBody({
    identity: IDENTITY,
    caller_id: caller_id,
    token: accessToken.toJwt()
  });
  callback(null, response);
};
