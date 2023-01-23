import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const PostCard = ({ post, index }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" shadow-lg rounded-md p-0 h-[400px] mb-8 m-4 max-md:m-2"
    >
      <Link href={`/post/${post.slug}`}>
        <div className="relative overflow-hidden shadow-md h-[400px] mb-6">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            height={500}
            width={700}
            className="object-top absolute h-[500px] w-full object-cover shadow-lg rounded-md lg:rounded-md"
            id="work"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
