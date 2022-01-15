import Link from "next/link";
import { useEffect, useState } from "react";
import { Categories } from "../@types/Category";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState<Categories[]>();

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b-2 w-full inline-block border-gray-500 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">GraphCMS</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories?.map((category, idx) => (
            <Link key={idx} href={`/category/${category.slug}`}>
              <span className="md:float-right mr-2 align-middle ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
