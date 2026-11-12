import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import { education, experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I’m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Changjian (Edward) Xiong
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I’m a Sydney-based software developer and Teaching Assistant at
          Macquarie University, where I teach data science and unstructured
          data mining. My professional work spans e-commerce websites, Java
          applications and data systems.
        </p>
        <p>
          At Macquarie’s Embodied AI and Systems Lab, I work on robotic
          manipulation. I’m interested in vision-language-action models and
          how robots can learn from fewer demonstrations.
        </p>
      </div>

      <div className="pt-10">
        <h2 className="subhead-text">Technical Skills</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {skills.map((skill) => (
            <div className="rounded-xl border border-slate-200 bg-white p-4" key={skill.name}>
              <h3 className="font-semibold text-slate-900">{skill.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {skill.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h2 className="subhead-text">Work and Teaching Experience</h2>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.organisation}
                date={experience.date}
                iconStyle={{ background: experience.colour }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.colour,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.organisation}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point) => (
                    <li
                      key={point}
                      className="pl-1 text-sm font-normal text-slate-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="pb-12">
        <h2 className="subhead-text">Education</h2>
        <ul className="mt-5 divide-y divide-slate-200">
          {education.map((entry) => (
            <li className="py-4" key={entry.institution}>
              <h3 className="font-semibold text-slate-900">{entry.degree}</h3>
              <p className="mt-1 text-slate-600">
                {entry.institution} · {entry.date}
              </p>
              <p className="mt-1 text-sm text-slate-600">{entry.focus}</p>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
