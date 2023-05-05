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
      className="h-[600px] max-md:h-[350px] flex flex-wrap justify-evenly max-sm:grid-cols-1 my-32 max-md:my-16 "
    >
      <div className="pl-24 max-md:pl-0 max-md:text-center ">
        <Link href={`/post/${post.slug}`}>
          <h3 className=" hover:text-[#42fbae] font-semibold duration-500 text-white text-3xl max-md:text-xl">
            {post.title}
          </h3>
          <div className="mt-0">
            <span className="text-xl font-thins text-white">
              {post.excerpt}
            </span>
          </div>
        </Link>
      </div>
      <div className="">
        <Link href={`/post/${post.slug}`}>
          <div className="relative w-[350px] h-[300px] mx-10 max-md:h-[200px] max-lg:h-[200px] flex items-center skew-y-6 max-md:skew-y-0 hover:skew-y-0 transition ease-out rounded-lg p-4 shadow-2xl shadow-teal-300">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={300}
              width={300}
              className=" h-fit max-md:h-fit w-fit object-contain max-md:object-cover rounded-b-3xl shadow-2xl shadow-teal-300  "
              id="work"
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
