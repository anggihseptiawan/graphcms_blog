import { useEffect, useRef, useState } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }: any) => {
  const [error, setError] = useState(false);
  // const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentInput = useRef<HTMLTextAreaElement | any>(null);
  const nameInput = useRef<HTMLInputElement | any>(null);
  const emailInput = useRef<HTMLInputElement | any>(null);
  const storeDataInput = useRef<HTMLInputElement | any>(null);

  useEffect(() => {
    if (nameInput && nameInput.current) {
      nameInput.current.value = window.localStorage.getItem("name");
    }

    if (emailInput && emailInput.current) {
      emailInput.current.value = window.localStorage.getItem("email");
    }
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentInput.current;
    const { value: name } = nameInput.current;
    const { value: email } = emailInput.current;
    const { checked: storeData } = storeDataInput.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const comments = { comment, name, email, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }

    submitComment(comments).then((res) => setShowSuccessMessage(true));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Comments</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentInput}
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus: ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameInput}
          className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus: ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          ref={emailInput}
          className="py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus: ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input type="checkbox" ref={storeDataInput} id="storeData" />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my email and name for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          onClick={handleCommentSubmission}
          className="px-8 py-3 cursor-pointer rounded-lg font-semibold"
          style={{ background: "linear-gradient(45deg, #7bb4ff, #ed8aff)" }}
        >
          Submit
        </button>
        {showSuccessMessage && (
          <p className="text-lg font-semibold text-blue-600">
            Comment submited
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
