import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ListIcon from "./ListIcon";

const education = [
  {
    id: 1,
    type: "Master's of Science in Software Engineering",
    place: "COMSATS Institute of Information and Technology, Islamabad",
    time: "January 2023 - Present",
    info: "A Master's of Science in Software Engineering is a graduate-level program that delves deep into advanced software development techniques, project management, and software architecture, equipping students with the expertise needed for leadership roles in the software engineering industry.",
  },
  {
    id: 2,
    type: "Bachelor's of Science in Computer Software Engineering",
    place: "National University of Sciences and Technology (NUST), Islamabad",
    time: "October 2017 - July 2021",
    info: "A Bachelor's of Science in Computer Software Engineering is a specialized undergraduate program that focuses on the design, development, and maintenance of software systems and applications, preparing students for careers in software engineering and programming.",
  },
  {
    id: 3,
    type: "Bachelor's of Science in Social Sciences",
    place:
      "National Institute of Peace Conflict Studies (NIPCONS), NUST, Islamabad",
    time: "May 2012 - Jun 2016",
    info: "A Bachelor's of Science in Social Sciences explores various aspects of human behavior, society, and culture, using a scientific approach to study subjects like psychology, sociology, economics, and political science.",
  },
];

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <ListIcon reference={ref} />
      <motion.div>
        <h3
          className="capitalize font-bold text-2xl"
          intial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {education.map(({ id, type, time, place, info }) => (
            <Details
              key={id}
              type={type}
              time={time}
              place={place}
              info={info}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
