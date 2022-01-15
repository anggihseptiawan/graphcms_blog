import moment from "moment";
import { useEffect, useState } from "react";
import { getComments } from "../services";
import parse from "html-react-parser";
import { Comments } from "../@types/Comments";

const Comments = ({ slug }: { slug: string }) => {
  {
    /* comments?.length will be error if the intial state is undefiened, so, to make it works, we set intial state to [] */
  }
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);

  return (
    <div>
      {comments?.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments?.length} Comments
          </h3>
          {comments?.map((comment, idx) => (
            <div key={idx} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
