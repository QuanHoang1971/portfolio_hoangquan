import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2f1e1e] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/bab3e762-dc5a-4608-a323-757b1ff79781"
        className="flex flex-col max-w-[600px] w-full"
        target="_blank"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 text-lg">
            I hope you have enjoyed looking at my work. if you're keen to hire
            me, then let's contact me an email
            <b className="text-2xl"> goodfriend3010@gmail.com</b>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Build Together
        </button>
      </form>
    </div>
  );
};

export default Contact;
