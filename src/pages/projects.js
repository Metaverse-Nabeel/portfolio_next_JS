import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/LandRover_Featured.png";
import project2 from "../../public/images/projects/MathMagicians_Project.jpg";
import project3 from "../../public/images/projects/cypto_angels_Finance.jpg";
import project4 from "../../public/images/projects/nike_shoes_eCommerce.jpg";
import project5 from "../../public/images/projects/Pokodex_Project.jpg";
import project6 from "../../public/images/projects/HTML_CSS_JS_Portfolio.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);


const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
                  <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
      <div className="mt-2 flex items-center">
        <Link href={github} target="_blank" className="w-10">
          <GithubIcon />
        </Link>
        <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibol dark:bg-light dark:text-dark sm:px-4 sm:text-base">
          Visit Project
        </Link>
      </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border boder-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'/>
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{scale:1.05}} transition={{duration:0.2}} priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
        <span className="text-dark font-medium text-xl dark:text-light lg:text-lg md:text-base">{summary}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
      <div className="w-full mt-2 flex items-center justify-between">
        <Link href={link} target="_blank" className="text-lg font-semibold p-2 px-3 border border-solid border-dark rounded-lg hover:bg-dark hover:text-light cursor-pointer dark:border-light dark:text-light md:text-base">
          Visit
        </Link>
        <Link href={github} target="_blank" className="w-8 md:w-6">
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
        <title>Nabeel Digital | Projects </title>
        <meta
          name="description"
          content="This is projects page for my portfolio website. It displays some of my projects highlighting my skills amd tech-stacks"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light mt-16">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
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
            <div className="col-span-6 sm:col-span-12">
               <Project
                type="Project"
                title="Math Magicians | Calculator & Quotes"
                summary="Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. It's built with ReactJS."
                img={project2}
                link="https://math-magicians-six.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/Math-Magicians"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Project"
                title="Crypto Angels | Crypto Currency"
                summary="Crypto Angels | Crypto Currencies API provides numeric data about crypto currencies. The webapp have several pages. This project was made with React JS."
                img={project3}
                link="https://crypto-angels.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/Stocks-Metrics"
              />
            </div>
            <div className="col-span-12">
                <FeaturedProjects
                type="Featured Project"
                title="Nike Shoes | E-Commerce Website"
                summary="Nike Shoes | This is a ReactJS project with TailwindCSS to make a Nike landing page. It will contain all the features required for an online E-commerce store."
                img={project4}
                link="https://nike-one-ochre.vercel.app/"
                github="https://github.com/Metaverse-Nabeel/nike"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Project"
                title="Pokodex | Pokemon's Wikipedia"
                summary="Pokedex is a JavaScript single-page Application, Built using ES6 features and Webpack bundler, notably modules, and consumes the PokeAPI using JavaScript async/await."
                img={project5}
                link="https://javascript-capstone.netlify.app/"
                github="https://github.com/hernandanielzamora/Javascript-Capstone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                type="Project"
                title="Portfolio | HTML, CSS, JS"
                summary="Portfolio-Project is a personal portfolio for a Software Developer. The purpose of this portfolio is to showcase your skills and expertise. Displaying the projects completed and linking the live demos for the websites deployed. HTML, CSS, and JavaScript are used in this project."
                img={project6}
                link="https://metaverse-nabeel.github.io/Portfolio-Project/"
                github="https://github.com/Metaverse-Nabeel/Portfolio-Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
