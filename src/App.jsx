import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import hero2 from "./assets/hero2.png-removebg-preview.png";
import { Disclosure } from "@headlessui/react";
import "./App.css";

const navigation = [
  { name: "Dashboard", href: "#" },
  { name: "Team", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      heading: "What are Projects?",
      content:
        "A project is a series of tasks that need to be completed within a specified time, in order to achieve the planned outcome. The planning, scheduling, tracking, and collaboration are overseen by one or many project managers, depending on how complex the project is. Project management is the process of piloting teams towards their predefined goals within the specified time through planning, tracking, and execution, usually under the guidance of a project manager — an online project management tool assists with getting the best outcome.",
    },
    {
      heading: "How does Project Management Work?",
      content:
        "Project management gives your project purpose, a framework, and a ground-plan, through planning, tracking, collaboration, and execution of tasks that are assigned to resources. With project management, you can streamline all the processes required to attain your goals, keep everyone in the loop through continuous communication, track every phase of the project closely and move past hiccups. It helps your teams stay organized, stay on the same page, and stay accountable!",
    },
    {
      heading: "Why do Businesses Need Project Management Platforms?",
      content:
        "Project management allows businesses to plan efficiently, without straying from the big picture. When everyone knows what they're working on, a positive working environment is fostered. Moreover, with project management, teams can allocate each member with an optimum amount of work that they are accountable for, laying the foundation for proper resource utilization. It also helps with consistent tracking so that your teams know where your project stands at every juncture, leading to increased productivity.",
    },
    {
      heading: "Project Management Decoded",
      content:
        "Project management is a crucial element for guiding your teams, ensuring transparency, and driving your projects toward success. It helps in prioritizing tasks, breaking them down into actionable steps, and assigning responsibility, while keeping track of progress. Whether you're working on small-scale tasks or large, complex projects, project management frameworks ensure you remain organized and efficient.",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Disclosure as="nav" className="bg-[#FFF8F8] text-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="h-19 w-27 rounded-lg" />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-black hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="px-4 py-2 bg-[#FE6059] text-white font-medium rounded-md hover:bg-red-600">
                Login
              </button>
              <button className="px-4 py-2  bg-[#FE6059] text-white font-medium rounded-md hover:bg-red-600 ml-4">
                Signup
              </button>
            </div>
          </div>
        </div>
      </Disclosure>

      {/* Hero Section */}
      <section className="bg-[#FFF8F8] py-17 px-8 flex items-center justify-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Streamline Your Workflow,<br></br>Achieve More with Projekt
            </h1>
            <h2 className="text-lg text-gray-600 mt-4">
              Simplify, Collaborate, Achieve.
            </h2>
            <div className="mt-6 flex space-x-4">
              <button className="px-7 py-3 bg-[#FE6059] text-white font-medium rounded-md hover:bg-red-600">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-1">
            <img src={hero} alt="Workflow" className="rounded-lg w-[100%]" />
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="bg-[#FFF8F8] py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Different departments use Projekt for various operations
          </h2>
          <div className="mt-8 flex justify-center space-x-7">
            {["Marketing", "Orders", "IT", "Product", "Company-wide"].map(
              (department, index) => (
                <div
                  key={index}
                  className={classNames(
                    department === "Marketing"
                      ? "bg-black text-white"
                      : "bg-white text-black",
                    "border rounded-full px-5 py-3 shadow-md flex items-center justify-center font-medium text-lg w-48"
                  )}
                >
                  {department}
                </div>
              )
            )}
          </div>
        </div>
      </section>



      <section className="bg-[#FFF8F8] py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <img src={hero2} alt="Campaign" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 text-left mt-6 md:mt-0 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Meet Campaign Goals
            </h2>
            <div className="text-lg text-gray-600 mt-4 space-y-4">
              <div className="flex items-center">
                <span className="text-black text-xl mr-3">✔️</span>
                <p>Drive clarity to focus on shifting business needs</p>
              </div>
              <div className="flex items-center">
                <span className="text-black text-xl mr-3">✔️</span>
                <p>Maximize launch results</p>
              </div>
              <div className="flex items-center">
                <span className="text-black text-xl mr-3">✔️</span>
                <p>Automate and scale processes for approvals</p>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="px-7 py-3 bg-[#FE6059] text-white font-medium rounded-md hover:bg-red-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#FFF8F8] py-10 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mt-0">
            <div className="w-full h-70 p-6 rounded-md">
              <h3 className="text-2xl font-bold bg-[#f4f4fa] inline-block">
                {slides[currentSlide].heading}
              </h3>
              <p className="text-lg text-gray-600 mt-4">
                {slides[currentSlide].content}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 ">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full bg-black cursor-pointer ${
                currentSlide === index ? "bg-red-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </section>


      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved to AdaCode.
          </p>
        </div>
      </footer>
    </>
  );
}
