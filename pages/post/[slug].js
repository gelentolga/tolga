import React from "react";
import { useRouter } from "next/router";

import Footer from "../../components/Footer";

import { PostDetail, Loader, CommentsForm } from "../../components";
import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  const color = {
    backgroundColor: `${post.color}`,
  };
  return (
    <>
      <div className="mx-auto px-10 max-md:px-3 sm:px-0 mb-8 " style={color}>
        <div className="grid grid-cols-1 gap-12 sm:gap-1">
          <div className="col-span-1 px-60 max-lg:px-10 max-md:px-0">
            <PostDetail post={post} />
            <CommentsForm slug={post.slug} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
