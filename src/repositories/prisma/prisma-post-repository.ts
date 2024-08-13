import { prisma } from "../../lib/prisma"
import {Prisma} from "@prisma/client"
import { PostRepository } from "../post-repository"

export class PrismaPostRepository implements PostRepository{
  async create(data: Prisma.PostCreateInput) {
    const post = await prisma.post.create({
      data,
    })
    return post
  }
}