import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const stats = [
  {
    id: 1,
    value: 150,
    name: "Satisfied Clients",
  },
  {
    id: 2,
    value: 40,
    name: "Projects Completed",
  },
  {
    id: 3,
    value: 3,
    name: "Years of Full-Stack Experience",
  },
  {
    id: 4,
    value: 4,
    name: "Years of IT Experience",
  },
];

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Nabeel Digital | About Page</title>
        <meta
          name="description"
          content="This is about me page for my portfolio website."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                👋 Hello, I&apos;m Nabeel Ahmed, a seasoned full-stack developer
                with a passion for crafting innovative software solutions. With
                a solid foundation in software development and project
                management, I bring a versatile skill set to the table.
              </p>
              <p className="my-4 font-medium">
                🌐 My journey in tech has been a thrilling ride. Currently,
                I&apos;m driving Full-Stack development at &quot;Must
                Fintech,&quot; a South Korean company. My toolkit includes
                modern up-to-date technical skills. But my expertise goes beyond
                coding; it&apos;s about translating ideas into user-friendly,
                impactful software.
              </p>
              <p className="my-4 font-medium">
                🌐 I&apos;m also honing my skills through Microverse&apos;s
                rigorous remote development boot camp. There, I&apos;ve delved
                into full-stack wizardry with React JS, Ruby, and Ruby on Rails.
                My creations include a dynamic e-commerce platform, a vibrant
                social media hub, and a cutting-edge psychological testing
                website.
              </p>
              <p className="font-medium">
                💼 I&apos;m on the lookout for exciting opportunities as a
                &quot;Full-Stack Developer&quot; and &quot;Software Project
                Manager.&quot; My track record speaks volumes, and I&apos;m
                ready to take on the responsibilities that come with these
                roles.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="NabeelDigital"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              {stats.map(({ id, value, name }) => (
                <div
                  key={id}
                  className="flex flex-col items-end justify-center"
                >
                  <span className="inline-block text-7xl font-bold">
                    <AnimateNumbers value={value} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                    {name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
