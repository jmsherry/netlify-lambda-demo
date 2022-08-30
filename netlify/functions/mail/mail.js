require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;
console.log("API KEY: ", SENDGRID_API_KEY);

sgMail.setApiKey(SENDGRID_API_KEY);

// const msg = {
//   to: "james.sherry@thejump.tech",
//   from: "test@example.com",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
// };

exports.handler = async function (event, context) {
  const msg = JSON.parse(event.body);
  console.log(
    "🚀 ~ file: mail.js ~ line 12 ~ exports.handler=function ~ msg",
    msg
  );
  console.log("test");
  try {
    await sgMail.send(msg);
    return {
      statusCode: 201,
      body: JSON.stringify({ message: `Message Sent` }),
    };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: error.toString() };
  }
};
