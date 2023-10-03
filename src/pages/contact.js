import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        <title>Nabeel Digital | Contact</title>
        <meta
          name="description"
          content="This is the contact page for the Nabeel Digital Portfolio website"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-full flex flex-col items-center self-center text-center">
              <AnimatedText
                text="Connect with Ease: Your Message, Our Priority!"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="min-w-[50vw] flex flex-col justify-between z-30 items-center rounded-lg backdrop-blur-md py-8 bg-dark/75 dark:bg-light/50">
                <form
                  action="https://formsubmit.co/47096d9f8e8dd2de1103fcd59ad1fb6c"
                  className="max-w-md"
                  method="POST"
                >
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md text-dark"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border rounded-md text-dark"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full p-2 border rounded-md text-dark"
                    />
                  </div>
                  <div className="flex flex-wrap md:flex-col md:gap-2 items-center justify-center mt-2 lg:self-center">
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light md:p-2 md:px-4 md:text-base"
                    >
                      Submit
                    </button>
                    <Link
                      href="mailto:nabeelahmed3129@gmail.com"
                      target={"_blank"}
                      className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light md:text-base md:m-0"
                    >
                      Mail Me!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
};

export default Contact;
