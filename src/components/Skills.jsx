import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    id: 1,
    name: "HTML",
    x: "-20vw",
    y: "2vw",
  },
  {
    id: 2,
    name: "CSS",
    x: "-5vw",
    y: "-10vw",
  },
  {
    id: 3,
    name: "JavaScript",
    x: "20vw",
    y: "6vw",
  },
  {
    id: 4,
    name: "ReactJS",
    x: "0vw",
    y: "12vw",
  },
  {
    id: 5,
    name: "NextJS",
    x: "-20vw",
    y: "-15vw",
  },
  {
    id: 6,
    name: "React-Redux",
    x: "15vw",
    y: "-12vw",
  },
  {
    id: 7,
    name: "UI / UX",
    x: "32vw",
    y: "-5vw",
  },
  {
    id: 8,
    name: "Figma",
    x: "1vw",
    y: "-18vw",
  },
  {
    id: 9,
    name: "SQL / No-SQL Databases",
    x: "-25vw",
    y: "10vw",
  },
  {
    id: 10,
    name: "Ruby on Rails",
    x: "18vw",
    y: "18vw",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    x: "-15vw",
    y: "-4vw",
  },
  {
    id: 12,
    name: "Software Project Management",
    x: "-8vw",
    y: "18vw",
  },
  {
    id: 13,
    name: "Web Design",
    x: "15vw",
    y: "-2vw",
  },
];

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skills.map(({ id, name, x, y }) => (
          <Skill key={id} name={name} x={x} y={y} />
        ))}
      </div>
    </>
  );
};

export default Skills;
