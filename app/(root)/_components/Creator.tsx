"use client";

import React from "react";
import AnimatedTooltip from "./AnimatedTooltip";

const people = [
  {
    id: 1,
    name: "Kumar Abhinav",
    designation: "Software Engineer",
    image: "/creator-1.jpg",
  },
  {
    id: 2,
    name: "Kaushik Karmakar",
    designation: "Frontend Developer",
    image: "/creator-2.jpg",
  },
  {
    id: 3,
    name: "Kundan Kumar",
    designation: "Backend Developer",
    image: "/creator-3.jpg",
  },
  {
    id: 4,
    name: "Nitesh Kumar",
    designation: "Backend Developer",
    image: "/creator-4.jpg",
  },
  {
    id: 5,
    name: "Rohit Kumar Singh",
    designation: "API Integration",
    image: "/creator-5.jpg",
  },
];

const Creator = () => {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
};

export default Creator;
