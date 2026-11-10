import { CTA } from "../components";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Selected{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Web applications I’ve built and research I’m working on at
          Macquarie University.
        </p>
      </div>

      <div className="my-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name}>
            <div className="block-container w-12 h-12" aria-hidden="true">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt=""
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h2 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h2>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <p className="mt-3 text-sm text-slate-600">{project.technologies}</p>
              {project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
