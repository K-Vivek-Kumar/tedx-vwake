import React from "react";
import { FaUsers, FaLightbulb, FaComments, FaRocket } from "react-icons/fa";

const ReasonsToAttend = (props: any) => {
  const reasons = [
    {
      title: "Meet Industry Heroes",
      description:
        "Opportunity to meet the heroes you have followed and interact with pioneers of the fields you are interested in.",
      icon: <FaUsers />,
    },
    {
      title: "Multidisciplinary Experience",
      description:
        "A one-of-a-kind event combining technology, entertainment, and design, giving you an opportunity to learn something new.",
      icon: <FaLightbulb />,
    },
    {
      title: "Thought-Provoking Discussions",
      description:
        "An atmosphere for thought-provoking discussions and a critical way of looking at issues and questions at all levels.",
      icon: <FaComments />,
    },
    {
      title: "Inspiring Stories",
      description:
        "Platform for real, jaw-dropping stories that inspire people to reach their potential and break their limits.",
      icon: <FaRocket />,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2
        className={`text-3xl font-bold text-center ${
          props.theme === "black" ? "text-black" : "text-black"
        } mb-6`}
      >
        Reasons to Attend
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${
              props.theme === "black"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            } transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
          >
            <div className="flex items-center justify-center h-16 w-16 mb-4 text-4xl">
              {reason.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
            <p className="text-base">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToAttend;
