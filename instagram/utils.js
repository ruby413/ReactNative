import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(`${__dirname}/src`, ".env") });
console.log(__dirname);
import { adjectives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

const sendMail = email => {
  const options = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email);
};

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "ruby413@nmodelin.page",
    to: adress,
    subject: "login Secret",
    html: `Hello! Your login secret it ${secret}. <br/> Copy paste on the app`
  };
  return sendMail(email);
};
