import { PROJECTS } from "../../constants/index";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        //id="projects" is used to scroll to the projects section when the user clicks on the projects link in the navbar.
        <section className="pt-20" id="projects">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-200"> 
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
                {PROJECTS.map((project) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        key={project.id} 
                        className="group relative overflow-hidden rounded-3xl shadow-lg transition-shadow hover:shadow-2xl"
                    >
                        <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src={project.image}
                            alt={project.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-3xl" 
                        />
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100 bg-black/50 rounded-3xl"
                        >
                            <h3 className="mb-4 text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wide">
                                {project.name}
                            </h3>
                            <p className="mb-8 px-6 text-xs sm:text-sm md:text-base leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center rounded-full bg-white text-black px-4 py-2 font-semibold hover:bg-gray-300 transition-all duration-300 text-sm md:text-base"
                            >
                                <span>View on Github</span>
                                <MdArrowOutward className="ml-2" />
                            </a>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

