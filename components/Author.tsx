import { Author } from "../@types/Author";

const Author = ({ author }: { author: Author }) => {
  return (
    <section className="text-center mt-20 mb-8 pt-12 pb-8 relative rounded-lg bg-white bg-opacity-20">
      <div className=" w-full absolute inset-x-1/2 -translate-x-1/2 -top-14">
        <img
          src={author.photo.url}
          alt={author.name}
          height="100px"
          width="100px"
          className="inline align-middle rounded-full"
        />
      </div>
      <h3 className="mt-4 mb-2 text-xl font-bold">{author.name}</h3>
      <p className="text-lg">{author.bio}</p>
    </section>
  );
};

export default Author;
