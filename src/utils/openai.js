import { API_GPT_KEY } from "./constants";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(API_GPT_KEY);