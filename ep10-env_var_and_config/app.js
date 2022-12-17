require("dotenv").config();
const mail = require("./config/mail");

console.log(mail.password);
console.log(process.env.USERNAME);

const username = "sam";
const password = "secretpassword";
