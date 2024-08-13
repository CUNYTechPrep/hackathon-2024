import { PROJECTS } from "../../constants/index";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
    return (
        <section className="pt-20" id="projects">
            <h2 className="mb-12 text-center text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-200"> 
                Projects
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
                {/* project contents found in constants folder in index.jsx  */}
                {PROJECTS.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-3xl shadow-lg transition-shadow hover:shadow-2xl">
                        <img 
                            src={project.image}
                            alt={project.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-3xl" 
                        />
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100 bg-black/50 rounded-3xl">
                            <h3 className="mb-4 text-2xl font-semibold uppercase tracking-wide">{project.name}</h3>
                            <p className="mb-8 px-6 text-sm md:text-base leading-relaxed">{project.description}</p>
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-gray-300 transition-all duration-300"
                            >
                                <span>View on Github</span>
                                <MdArrowOutward className="ml-2" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
