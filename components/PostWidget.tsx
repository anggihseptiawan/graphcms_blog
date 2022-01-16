import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PostCard } from "../@types/PostCard";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({
  categories,
  slug,
}: {
  categories?: string[];
  slug?: string;
}) => {
  const [relatedPost, setRelatedPost] = useState<PostCard[]>([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPost(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPost(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPost?.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              height="60px"
              width="60px"
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="font-xs text-gray-500">
              {moment(post.createdAt).format("MMMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
