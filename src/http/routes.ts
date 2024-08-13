import { FastifyInstance } from "fastify";
import { postAi } from "./controllers/post";

export async function appRoutes(app:FastifyInstance){
  app.post('/post', postAi)
}