import React from "react";

const Contact = () => {
  return (
    <div className=" p-8 mt-32">
      <h1 className="text-2xl font-medium">Contact Us</h1>
      <form className="bg-white p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" for="name">
            Name
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" for="email">
            Email
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" for="message">
            Message
          </label>
          <textarea
            className="border border-gray-400 p-2 w-full h-32"
            id="message"
            name="message"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <div className="text-center mt-6">
          <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
