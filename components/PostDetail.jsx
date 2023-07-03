import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";
import moment from "moment";

const PostDetail = ({ post, index }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-[20px] font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8 text-[20px] leading-relaxed">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-[20px] font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  const color = {
    backgroundColor: `${post.color}`,
  };
  const styling = {
    backgroundImage: `url('${post.featuredImage}')`,
  };

  return (
    <>
      <div className="rounded-sm p-4">
        <div className="relative overflow-hidden mb-1 px-0">
          <h1 className=" text-[80px] max-lg:text-[70px] max-md:text-[60px] font-black max-md:mx-0 text-justify pr-4 max-md:pr-0">
            {post.title}
          </h1>
          <h2 className=" text-[30px] max-md:text-[25px] font-thin italic mb-10 max-md:mx-0 text-justify pr-4 max-md:pr-0">
            {post.excerpt}
          </h2>
          <div className="grid grid-cols-1 max-md:grid-cols-1 mb-10">
            <p className=" text-[20px] font-light max-md:font-light max-md:text-[16px] max-md:mx-0 text-justify col-span-4 pr-4 max-md:pr-0">
              {post.projectDesc}
            </p>
          </div>
          <div className="w-full">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height={960}
              width={1920}
              className=" h-[500px] max-sm:h-[400px] max-md:object-cover object-contain rounded-lg  "
              id="work"
            />
          </div>
        </div>

        <div className="mb-20">
          <h1 className="py-4 text-[30px] font-bold">Competitive Analysis</h1>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className={`${styles.innerWidth} `}
          >
            <motion.div
              variants={fadeIn("right", "spring", index * 0, 1)}
              className="grid grid-cols-1 max-md:grid-cols-1 gap-5 max-md:gap-10 max-md:mb-10"
            >
              <div className="col-span-1 p-4 max-md:p-6 bg-slate-300 rounded-xl">
                <span className="text-[25px] max-md:font-bold text-[#5332fd] ">
                  01
                </span>
                <p className="text-[16px] font-light max-md:font-light text-justify">
                  {post.competitiveAnalysis}
                </p>
              </div>
              <div className="grid-span-1 p-4 max-md:p-6 bg-slate-300 rounded-xl">
                <span className="text-[25px] max-md:font-bold text-[#5332fd]">
                  02
                </span>
                <p className="text-[16px] font-light max-md:font-light text-justify">
                  {post.competitiveAnalysis2}
                </p>
              </div>
              <div className="grid-span-1 p-4 max-md:p-6 bg-slate-300 rounded-xl">
                <span className="text-[25px] max-md:font-bold text-[#5332fd]">
                  03
                </span>
                <p className="text-[16px] font-light max-md:font-light text-justify">
                  {post.competitiveAnalysis3}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className={`${styles.innerWidth} `}
        >
          <motion.div
            variants={fadeIn("right", "spring", index * 0, 1)}
            className="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-md:gap-10 max-md:mb-10"
          >
            <div className="col-span-1 p-4 max-md:p-0">
              <span className="text-[25px] max-md:font-bold text-[#5332fd] ">
                01
              </span>
              <p className="text-[20px] font-semibold max-md:font-light text-justify">
                {post.firstGoal}
              </p>
            </div>
            <div className="grid-span-1 p-4 max-md:p-0">
              <span className="text-[25px] max-md:font-bold text-[#5332fd]">
                02
              </span>
              <p className="text-[20px] font-semibold max-md:font-light text-justify">
                {post.secondGoal}
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="mb-10">
          <h1 className="py-4 text-[30px] font-bold">Solution</h1>
          <p className="py-4 text-[30px] max-md:text-[25px] font-Poppins mb-10">
            {post.solution}
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className={`${styles.innerWidth} `}
          >
            <motion.div
              variants={fadeIn("right", "spring", index * 0, 1)}
              className=" gap-20 max-md:gap-10 max-md:mb-10"
            >
              <div className="grid grid-cols-3 max-md:grid-cols-1 gap-20 max-md:gap-5 mb-10">
                <div className="col-span-1 p-6 bg-gray-500 rounded-3xl">
                  <p className="text-[15px] font-light text-white">
                    {post.firstGoal}
                  </p>
                </div>
                <div className="grid-span-1 p-6 bg-gray-500 rounded-3xl">
                  <p className="text-[15px] font-light text-white">
                    {post.secondGoal}
                  </p>
                </div>
                <div className="grid-span-1 p-6 bg-gray-500 rounded-3xl">
                  <p className="text-[15px] font-light text-white">
                    {post.secondGoal}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="w-full">
            <Image
              src={post.image2.url}
              alt={post.title}
              height={960}
              width={1920}
              className=" h-[500px] max-sm:h-[400px] max-md:object-cover object-contain rounded-lg  "
              id="work"
            />
          </div>
          {/* <div className="flex flex-col justify-center items-center overflow-hidden mt-10 rounded-md">
            <iframe
              className="w-[3000px] h-[700px] max-md:w-[250px] "
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flw4N7boPun8RDVYQyqvenF%2FUntitled%3Fpage-id%3D0%253A1%26node-id%3D80-596%26viewport%3D592%252C474%252C0.06%26scaling%3Dscale-down%26starting-point-node-id%3D80%253A596"
              allowfullscreen
            ></iframe>
          </div> */}
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center px-10 bg-gray-200 h-20">
              <span className="text-[50px] max-md:text-[30px] font-bold text-[#5332fd]">
                01
              </span>
              <span className="text-[50px] max-md:text-[30px] font-thin text-black">
                Research
              </span>
            </div>
            <p className="py-4 font-black text-[20px] font-Poppins mb-5">
              {post.research}
            </p>
            <div className="grid grid-cols-6 max-md:grid-cols-1 max-md:pb-5 ">
              <div className="col-span-4 max-md:mb-5">
                <h1 className="mb-5 underline text-lg">Primary Research</h1>
                <p className="">{post.primaryResearch}</p>
              </div>
              <div className="w-full col-span-2">
                <Image
                  src={post.image3.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 ">
              <div className="mb-10">
                <h1 className="mb-5 underline text-lg">Secondary Research</h1>
                <p className="">{post.secondaryResearch}</p>
              </div>
              <div className="w-full grid grid-cols-3 max-md:grid-cols-1 gap-4 mb-10">
                <div className="p-4 bg-gray-500 rounded-3xl text-white">
                  <div className="bg-white w-6 h-6 flex justify-center items-center rounded-full mb-4">
                    <span className="text-[20px]  text-[#5332fd] ">1</span>
                  </div>
                  <h2>{post.secondary1}</h2>
                </div>
                <div className="p-4 bg-gray-500 rounded-3xl text-white">
                  <div className="bg-white w-6 h-6 flex justify-center items-center rounded-full mb-4">
                    <span className="text-[20px]  text-[#5332fd] ">2</span>
                  </div>
                  <h2>{post.secondary2}</h2>
                </div>
                <div className="p-4 bg-gray-500 rounded-3xl text-white">
                  <div className="bg-white w-6 h-6 flex justify-center items-center rounded-full mb-4">
                    <span className="text-[20px]  text-[#5332fd] ">3</span>
                  </div>
                  <h2>{post.secondary3}</h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-10 bg-gray-200 h-20">
              <span className="text-[50px] max-md:text-[30px] font-bold text-[#5332fd]">
                02
              </span>
              <span className="text-[50px] max-md:text-[30px] font-thin text-black">
                Ideation
              </span>
            </div>
            <p className="py-4 font-black text-[20px] font-Poppins mb-5">
              {post.ideation}
            </p>
            <div className="mb-10">
              <div className="mb-10">
                <h1 className="mb-5 underline text-lg">Affinity Clustering</h1>
                <p className="">{post.primaryResearch}</p>
              </div>
              <div className="w-full">
                <Image
                  src={post.ideationImg.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-contain rounded-lg  "
                  id="work"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-10 bg-gray-200 h-20">
              <span className="text-[50px] max-md:text-[30px] font-bold text-[#5332fd]">
                03
              </span>
              <span className="text-[50px] max-md:text-[30px] font-thin text-black">
                Prototyping
              </span>
            </div>
            <p className="py-4 font-thin text-[20px] max-md:text-[1px] mb-5">
              {post.prototyping}
            </p>
            <div className="mb-10">
              <div className="w-full">
                <Image
                  src={post.prototypingImg1.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover max-md:object-cover rounded-lg  "
                  id="work"
                />
              </div>
              <div className="mb-10">
                <h1 className="mb-5 underline text-lg">Design</h1>
                <p className="">{post.prototypingDesc1}</p>
              </div>
              <div className="w-full">
                <Image
                  src={post.prototypingImg2.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center px-10 bg-gray-200 h-20">
              <span className="text-[50px] max-md:text-[30px] font-bold text-[#5332fd]">
                04
              </span>
              <span className="text-[50px] max-md:text-[30px] font-thin text-black">
                Final Design
              </span>
            </div>
            <p className="py-4 font-black text-[20px] font-Poppins mb-5">
              {post.finalDesign}
            </p>
            <div className="mb-10">
              <div className="mb-10">
                <h1 className="mb-5 underline text-lg">Affinity Clustering</h1>
                <p className="">{post.finalDesignDesc1}</p>
              </div>
              <div className="mb-10">
                <p className="">{post.finalDesignDesc2}</p>
              </div>
              <div className="w-full mb-10">
                <Image
                  src={post.finalDesignImg1.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
              <div className="w-full mb-10">
                <Image
                  src={post.finalDesignImg2.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
              <div className="mb-10">
                <p className="">{post.finalDesignDesc3}</p>
              </div>
              <div className="w-full mb-10">
                <Image
                  src={post.finalDesignImg3.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
              <div className="mb-10">
                <p className="">{post.finalDesignDesc4}</p>
              </div>
              <div className="w-full mb-10">
                <Image
                  src={post.finalDesignImg4.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
              <div className="w-full mb-10">
                <Image
                  src={post.finalDesignImg5.url}
                  alt={post.title}
                  height={960}
                  width={1920}
                  className=" h-[500px] max-sm:h-[400px] object-cover rounded-lg  "
                  id="work"
                />
              </div>
              <div className="mb-10">
                <p className="">{post.lastDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
};
