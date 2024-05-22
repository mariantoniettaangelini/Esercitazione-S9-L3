import { iPost } from "./post"

export interface iJsonImp {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
