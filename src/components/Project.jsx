import { projects } from "../constants/constant";

function Project() {
  return (
    <div className="flex   justify-center items-center mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
         return (
          <div className="w-80 h-100 hover:scale-105  ease-in-out bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img
            src={project.img}
            className="w-72 h-40 rounded-2xl object-cover"
          />
          <div className="">
            <p className="font-extrabold">{project.name}</p>
            <p className="">{project.description}</p>
          </div>
          <div className="flex gap-6">
            <a
              href={project.url}
              target="_blank"
              className="bg-blue-800 font-extrabold p-2 px-6 rounded-xl transition-colors"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              className="bg-black font-extrabold p-2 px-6 rounded-xl transition-colors"
            >
              Github
            </a>
          </div>
        </div>
         )
        })}
      </div>
    </div>
  );
}

export default Project;
