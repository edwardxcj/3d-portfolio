import { Link } from "react-router-dom";

const destinations = {
  2: {
    message: "I teach data science at Macquarie University and build web applications.",
    to: "/about",
    label: "About me",
  },
  3: {
    message: "Explore my software projects and robotics research.",
    to: "/projects",
    label: "View projects",
  },
  4: {
    message: "Have a question or want to collaborate?",
    to: "/contact",
    label: "Get in touch",
  },
};

const HomeInfo = ({ currentStage }) => {
  const destination = destinations[currentStage];

  return (
    <div className="pointer-events-auto flex min-h-36 w-full max-w-md flex-col items-center justify-center rounded-2xl border border-white/20 bg-slate-900/90 px-4 py-4 text-center text-white shadow-lg sm:px-6 lg:w-80 lg:items-start lg:text-left">
      <h1 className={destination ? "sr-only" : "font-poppins text-2xl font-semibold sm:text-3xl"}>
        Changjian Xiong
      </h1>
      <p aria-live="polite" className="mt-1 text-sm text-slate-200 sm:text-base">
        {destination?.message ?? "Software developer and Teaching Assistant in Sydney"}
      </p>
      {destination ? (
        <Link
          to={destination.to}
          className="mt-3 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {destination.label} <span aria-hidden="true">→</span>
        </Link>
      ) : currentStage !== null ? (
        <p className="mt-3 text-sm text-slate-200">Drag the island to explore.</p>
      ) : null}
    </div>
  );
};

export default HomeInfo;
