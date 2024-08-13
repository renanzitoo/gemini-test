import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod"
import { makePostUseCase } from "../../use-cases/factories/make-post-use-case";

export async function postAi (request: FastifyRequest, reply: FastifyReply){
  const postBodySchema = z.object({
    prompt: z.string()
  })

  const {prompt} = postBodySchema.parse(request.body)

  try{
    const postUseCase = makePostUseCase()

    await postUseCase.execute({
      prompt
    })
  }catch(err){
    throw err
  }
  return reply.status(201).send()
}