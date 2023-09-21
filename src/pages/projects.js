import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/LandRover_Featured.png";
import project2 from "../../public/images/projects/MathMagicians_Project.jpg"

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative">
                  <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
      <div className="mt-2 flex items-center">
        <Link href={github} target="_blank" className="w-10">
          <GithubIcon />
        </Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
          Visit Project
        </Link>
      </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark bg-light p-6 relative">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'/>
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
      <div className="w-full mt-2 flex items-center justify-between">
        <Link href={link} target="_blank" className="text-lg font-semibold p-2 px-3 border border-solid border-dark rounded-lg hover:bg-dark hover:text-light cursor-pointer">
          Visit
        </Link>
        <Link href={github} target="_blank" className="w-8">
          <GithubIcon />
        </Link>
        
      </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Nabeel Digital | Projects Page</title>
        <meta
          name="description"
          content="This is projects page for my portfolio website. It displays some of my projects highlighting my skills amd tech-stacks"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                type="Featured Project"
                title="Land Rover | Car Booking Application"
                summary="Land Rover: Redefining vehicle reservations with React JS & Rails. Effortless booking, mobile-friendly, real-time updates. Join us today!"
                img={project1}
                link="https://land-rover-e.netlify.app/"
                github="https://github.com/VelzckC0D3/Land-Rover-E-Commerce"
              />
            </div>
            <div className="col-span-6">
               <Project
                type="Project"
                title="Math Magicians | Calculator & Quotes"
                summary="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. It's built with ReactJS."
                img={project2}
                link="https://math-magicians-six.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/Math-Magicians"
              />
            </div>
            <div className="col-span-6">
                <Project
                type="Project"
                title="Math Magicians | Calculator & Quotes"
                summary="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. It's built with ReactJS."
                img={project2}
                link="https://math-magicians-six.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/Math-Magicians"
              />
            </div>
            <div className="col-span-12">
                <FeaturedProjects
                type="Featured Project"
                title="Land Rover | Car Booking Application"
                summary="Land Rover: Redefining vehicle reservations with React JS & Rails. Effortless booking, mobile-friendly, real-time updates. Join us today!"
                img={project1}
                link="https://land-rover-e.netlify.app/"
                github="https://github.com/VelzckC0D3/Land-Rover-E-Commerce"
              />
            </div>
            <div className="col-span-6">
                <Project
                type="Project"
                title="Math Magicians | Calculator & Quotes"
                summary="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. It's built with ReactJS."
                img={project2}
                link="https://math-magicians-six.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/Math-Magicians"
              />
            </div>
            <div className="col-span-6">
                <Project
                type="Project"
                title="Math Magicians | Calculator & Quotes"
                summary="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. It's built with ReactJS."
                img={project2}
                link="https://math-magicians-six.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/Math-Magicians"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
