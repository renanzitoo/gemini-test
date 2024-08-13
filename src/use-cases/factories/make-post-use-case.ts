import { PrismaPostRepository } from "../../repositories/prisma/prisma-post-repository";
import { PostUseCase } from "../post";

export function makePostUseCase (){
  const prismaPostsRespository = new PrismaPostRepository()
  const postUseCase = new PostUseCase(prismaPostsRespository)

  return postUseCase
}