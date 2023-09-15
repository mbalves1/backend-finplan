
const nodemailer = require('nodemailer')
// const hbs = require('nodemailer-express-handlebars')

const { host, port, user, pass } = require('../config/mailer.json')

const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass
  }
});

// transport.use('compile', hbs({
//   viewEngine: 'handlebars',
//   viewPath: path.resolve('../resources/mail/'),
//   extName: './html',
// }))

module.export = transporter