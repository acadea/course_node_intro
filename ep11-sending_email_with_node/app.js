require("dotenv").config();
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const { appConfig } = require("./config/app");
const { mailConfig } = require("./config/mail");



function getWelcomeMail(to) {
    const mailPath = path.join(__dirname, "views", "mail", "welcome.html");

    const html = fs.readFileSync(mailPath, "utf-8");

    return html
        .replace("{{ app_name }}", appConfig.name)
        .replace("{{ name }}", to);
}

async function send(transporter, receivers) {
    for (let index = 0; index < receivers.length; index++) {
        const receiver = receivers[index];

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Sam" <sam@example.com>', // sender address
            to: receiver, // list of receivers
            subject: "Welcome 👻!", // Subject line
            text: "Welcome to " + appConfig.name, // plain text body
            html: getWelcomeMail(receiver), // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
}

async function main() {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        // host can be gmail, outlook and etc
        host: mailConfig.host,
        port: mailConfig.port,
        secure: true, // true for 465, false for other ports
        auth: {
            user: mailConfig.user, // generated ethereal user
            pass: mailConfig.password, // generated ethereal password
        },
    });

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const testAccount = await nodemailer.createTestAccount();

    const users = ["someone@example.com"];
    send(transporter, users);
}

main().catch(console.error);
