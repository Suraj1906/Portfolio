import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Code Editor",
    year: "Mar2022",
    align: "right",
    image: "/images/Code.PNG",
    link: "https://code-editor-tool.netlify.app/",
  },
  {
    name: "Food Ordering App",
    year: "Sept2022",
    align: "left",
    image: "/images/food.PNG",
    link: "https://flavoro-food-service.netlify.app/",
  },
  {
    name: "Portfolio",
    year: "Jan2023",
    align: "right",
    image: "/images/Port.PNG",
    link: "#",
  },
  {
    name: "Weather App",
    year: "May2024",
    align: "left",
    image: "/images/Weather.PNG",
    link: "https://weather-forecast-teller.netlify.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
