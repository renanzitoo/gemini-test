import { Post } from "@prisma/client";
import { PostRepository } from "../repositories/post-repository";
import { aiExecution } from "../middleware/gemini/gemini";

interface PostUseCaseRequest{
  prompt: string;
}

interface PostUseCaseResponse {
  post: Post
}

export class PostUseCase {
  constructor(
    private postRepository : PostRepository
  ){}

  async execute({
    prompt,
  }: PostUseCaseRequest): Promise<PostUseCaseResponse>{
    const message = await aiExecution(prompt)

    const post = await this.postRepository.create({
      title: prompt.toString(),
      body: message
    })

    return {
      post
    }

  }
}