import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

const Home = () => {
  return (
    <>
      <Head>
        <title>Nabeel Digital | Home</title>
        <meta name="description" content="This is the home page for the Nabeel Digital Portfolio website" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 mr-12">
              <Image
                src={profilePic}
                alt="NabeelDigital"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left"/>
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 ">
                <Link href="/Nabeel_Ahmed_Resume.pdf" target={"_blank"}className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-light" download={true}>Resume <LinkArrow className={"w-6 ml-1"} /></Link>
                <Link href="mailto:nabeelahmed3129@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capitalize text-dark underline underline-offset-2 dark:text-light">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="NabeelDigital" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
};

export default Home;
