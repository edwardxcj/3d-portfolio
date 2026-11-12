import CTA from "../components/CTA";
import ProjectPreview from "../components/ProjectPreview";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Projects{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          &amp; Research
        </span>
      </h1>

      <p className="mt-5 max-w-2xl text-slate-600">
        Web applications I’ve built and research I’m working on at Macquarie
        University.
      </p>

      <div className="my-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => {
          const hasCaseStudy = project.preview || project.milestones;

          return (
            <article
              key={project.name}
              className={`rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 ${
                hasCaseStudy
                  ? "grid items-center gap-7 sm:col-span-2 md:grid-cols-2 md:gap-9"
                  : ""
              }`}
            >
              <div>
                {project.iconUrl && (
                  <div
                    className="block-container mb-5 h-12 w-12"
                    aria-hidden="true"
                  >
                    <div className={`btn-back rounded-xl ${project.theme}`} />
                    <div className="btn-front flex items-center justify-center rounded-xl">
                      <img
                        src={project.iconUrl}
                        alt=""
                        className="h-1/2 w-1/2 object-contain"
                      />
                    </div>
                  </div>
                )}
                {project.status && (
                  <p className="mb-2 text-sm font-semibold text-blue-700">
                    {project.status}
                  </p>
                )}
                <h2 className="font-poppins text-2xl font-semibold text-slate-900">
                  {project.name}
                </h2>
                <p className="mt-3 leading-relaxed text-slate-700">
                  {project.description}
                </p>
                {project.contribution && (
                  <p className="mt-3 leading-relaxed text-slate-700">
                    {project.contribution}
                  </p>
                )}
                <p className="mt-4 text-sm font-medium text-slate-600">
                  {project.technologies}
                </p>
                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} for ${project.name}`}
                        className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {project.preview && (
                <ProjectPreview
                  name={project.name}
                  preview={project.preview}
                />
              )}
              {project.milestones && (
                <dl className="divide-y divide-slate-200 rounded-xl bg-slate-50 px-5">
                  {project.milestones.map(({ label, description }) => (
                    <div key={label} className="py-4">
                      <dt className="font-semibold text-slate-900">{label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-slate-700">
                        {description}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          );
        })}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
