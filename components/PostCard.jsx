import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const PostCard = ({ post, index }) => {
  const color = {
    backgroundColor: `${post.color}`,
  };
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0, 0.5)}
      className=" p-0 h-[600px] grid grid-cols-6 max-sm:grid-cols-1 my-20 "
    >
      <div className="col-span-2 pl-5 pt-5 max-md:text-center">
        <Link href={`/post/${post.slug}`}>
          <h3 className=" hover:text-[#fb6342] duration-500 text-3xl">
            Hey this <br />
            is my project
          </h3>
          <div className="mt-0">
            <span className="text-xl">Project name</span>
          </div>
        </Link>
      </div>
      <div className="col-span-4">
        <Link href={`/post/${post.slug}`}>
          <div className="relative h-[300px] mx-10 max-md:h-[200px] max-lg:h-[200px] flex items-center skew-y-6 max-md:skew-y-0 hover:skew-y-0 transition ease-out bg-gray-100 bg-opacity-70 rounded-lg p-4 shadow-2xl">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={960}
              width={1920}
              className=" h-[300px] max-md:h-[200px] object-contain max-md:object-cover rounded-lg max-lg:rounded-none  "
              id="work"
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
