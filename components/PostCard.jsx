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
      className="h-[600px] max-md:h-[400px] mt-24 max-md:mt-0  flex flex-wrap max-md:flex-col-reverse justify-evenly max-md:justify-center my-0 max-md:my-0 "
    >
      <div className=" pt-20 max-md:pt-2 max-md:pl-0 max-md:text-center ">
        <Link href={`/post/${post.slug}`}>
          <h3 className=" hover:text-[#42fbae] font-semibold duration-500 text-white text-3xl max-md:text-xl">
            {post.title}
          </h3>
          <div className="mt-0 w-[550px] max-md:hidden pt-5">
            <span className="text-xl font-thin text-white">{post.excerpt}</span>
          </div>
        </Link>
      </div>
      <div className=" pt-20">
        <Link href={`/post/${post.slug}`} className="">
          <div className="relative w-[550px] max-md:w-[300px] h-[350px] mx-10 max-md:h-[200px] max-lg:h-[200px] flex items-center skew-y-6 max-md:skew-y-0 hover:skew-y-0 transition ease-out rounded-lg p-4 shadow-3xl shadow-teal-300">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={300}
              width={300}
              className=" h-[300px] max-md:h-fit w-fit bg-transparent bg-opacity-25 object-contain max-md:object-cover rounded-b-3xl  "
              id="work"
            />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
