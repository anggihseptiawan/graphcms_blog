import { Author } from "./Author";
import { Categories } from "./Category";

export interface PostCard {
  author: Author;
  categories: Categories[];
  createdAt: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  title: string;
}
