import React from "react";
const services = [
  {
    id: 1,
    service: "Responsive Web Design",
    description:
      "Creating visually appealing, responsive websites that look great on all devices.",
    price: "$150 - $500",
  },
  {
    id: 2,
    service: "React Application Development",
    description:
      "Building custom web applications with React for dynamic and fast user experiences.",
    price: "$300 - $1000",
  },
  {
    id: 3,
    service: "UI/UX Design with Tailwind CSS",
    description:
      "Designing sleek and modern user interfaces with Tailwind CSS, focusing on user experience.",
    price: "$200 - $600",
  },
  {
    id: 4,
    service: "Troubleshooting & Bug Fixing",
    description:
      "Identifying and fixing issues in HTML, CSS, JavaScript, and React to enhance site performance.",
    price: "$50 - $300",
  },

  {
    id: 5,
    service: "PSD/Figma to HTML Conversion",
    description:
      "Converting PSD, Figma, or Sketch designs to pixel-perfect HTML, with animations and interactivity.",
    price: "$100 - $400",
  },
  {
    id: 6,
    service: "Content Writing and Marketing Support",
    description:
      "Creating engaging content and helping with digital marketing strategies for websites.",
    price: "$50 - $200",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <h2 className="text-4xl font-bold text-center mb-12 ">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className=" text-2xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.id}
              </div>
              <h3 className=" mt-2 text-[19px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 whitespace-nowrap ">
                {service.service}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt- inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
