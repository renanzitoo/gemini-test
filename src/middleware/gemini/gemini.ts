import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from '../../env';

const genAI = new GoogleGenerativeAI(env.API_KEY);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"})

export async function aiExecution(phrase:string){
  const result = await model.generateContent(phrase)
  const response = await result.response;
  const text = response.text()
  
  return text
}