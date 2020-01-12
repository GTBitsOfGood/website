const nodemailer = require('nodemailer')

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
exports.handler = async event => {
  const { EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env
  try {
    const { name, email, message } = JSON.parse(event.body).payload.data

    const transporter = nodemailer.createTransport({
      service: 'Zoho',
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        type: 'SSL',
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    })

    const sendResult = await transporter.sendMail({
      from: 'hello@bitsofgood.org',
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
      statusCode: error.responseCode || 500,
      body: error.response ? JSON.stringify(error.response) : '',
    }
  }
}
