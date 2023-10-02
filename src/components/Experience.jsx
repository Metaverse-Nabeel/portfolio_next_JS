import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const experiences = [
  {
    id: 1,
    position: "Mentor (Volunteer)",
    company: "MICROVERSE",
    companyLink: "https://www.linkedin.com/school/microverseinc/",
    time: "April 2023 - Present",
    address: "San Francisco, California",
    work: "Mentored 5 junior web developers, providing technical support through 15 code reviews.Proposed improvements to code organization to improve code quality and overall performance. Provided advice and tips on maintaining motivation to maintain longevity in the program.",
  },
  {
    id: 2,
    position: "Full-stack Developer",
    company: "MUST-FINTECH",
    companyLink: "https://www.linkedin.com/company/must-fintech/",
    time: "February 2023 - Present",
    address: "Seoul, South Korea",
    work: "Drove a 35% boost in user engagement through data-driven UI/UX enhancements and strategic decisions, fueling Must FinTech's digital success. Achieved a 40% reduction in page load times, enhancing user satisfaction and efficiency through relentless optimization efforts. Conceptualized, developed, and launched three mission-critical web applications, now integral to Must FinTech's offerings",
  },
  {
    id: 3,
    position: "Front-end Developer",
    company: "SIGNITIVE LOGICS",
    companyLink: "https://www.linkedin.com/company/signitive-logics/",
    time: "August 2022 - January 2023",
    address: "Islamabad, Pakistan",
    work: "Demonstrated expertise in responsive web design, utilizing HTML, CSS, and JavaScript to achieve a 25% increase in user engagement.",
  },
  {
    id: 4,
    position: "Software Engineer",
    company: "SIGNITIVE LOGICS",
    companyLink: "https://www.linkedin.com/company/signitive-logics/",
    time: "February 2022 - July 2022",
    address: "Islamabad, Pakistan",
    work: "Witnessing and assisting in the implementation of Software Development processes. Translated wireframes into flawless interfaces, resulting in a notable 20% boost in conversion rates.",
  },
  {
    id: 5,
    position: "IT Professional",
    company: "SIGNITIVE LOGICS",
    companyLink: "https://www.linkedin.com/company/signitive-logics/",
    time: "July 2016 - January 2022",
    address: "Islamabad, Pakistan",
    work: "Transition from a Social Sciences field to the Information Technology. Learning and Implementation of modern technology. Collaborated effectively to streamline integration, leading to a 30% reduction in bug reports and improved user experiences",
  },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg"
          intial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {position}&nbsp;{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[50%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experiences.map(
            ({ id, position, company, companyLink, time, address, work }) => (
              <Details
                key={id}
                position={position}
                company={company}
                companyLink={companyLink}
                time={time}
                address={address}
                work={work}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
