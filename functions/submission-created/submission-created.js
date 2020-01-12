const nodemailer = require('nodemailer')
require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
exports.handler = async event => {
  const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env
  try {
    const { name, email, message } = JSON.parse(event.body).payload

    const transporter = nodemailer.createTransport({
      service: 'Zoho',
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        type: 'SSL',
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
    })

    const sendResult = await transporter.sendMail({
      from: `"ContactUsForm" <hell@bitsofgood.org>`,
      to: 'hello@bitsofgood.org',
      subject: `Contact Us inquiry from ${name}!`,
      text: `Forward a reply to ${email} \n\n ${message}`,
    })
    return {
      statusCode: 250,
      body: JSON.stringify(sendResult),
    }
  } catch (error) {
    return {
      statusCode: error.responseCode,
      body: JSON.stringify(error.response),
    }
  }
}
