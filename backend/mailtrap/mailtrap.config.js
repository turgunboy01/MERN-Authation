import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

// const ENDPOINT = "https://send.api.mailtrap.io";

export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "DevSenior",
};
