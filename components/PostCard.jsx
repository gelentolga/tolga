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
      className="rounded-md p-0 h-[300px] m-4 max-md:m-2"
    >
      <Link href={`/post/${post.slug}`}>
        <div className="relative overflow-hidden h-[300px] rounded-md ">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            height={500}
            width={700}
            className="object-top absolute h-[300px] w-full object-cover rounded-md pb-10"
            id="work"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default PostCard;
