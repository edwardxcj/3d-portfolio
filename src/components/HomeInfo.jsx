import { Link } from "react-router-dom";

const stageMessage = {
  1: "Drag the island to explore.",
  2: "I teach data science at Macquarie University.",
  3: "Explore my software projects and robotics research.",
  4: "Have a question or want to collaborate?",
};

const actionStyle =
  "rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const HomeInfo = ({ currentStage }) => {
  const message = stageMessage[currentStage];

  return (
    <div className="pointer-events-auto w-full max-w-md rounded-2xl border border-white/20 bg-slate-900/90 px-4 py-4 text-center text-white shadow-lg sm:px-6 lg:max-w-xs lg:text-left">
      <h1 className="font-poppins text-2xl font-semibold sm:text-3xl">
        Changjian Xiong
      </h1>
      <p className="mt-1 text-sm text-slate-200 sm:text-base">
        Software developer and Teaching Assistant in Sydney
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2 lg:justify-start">
        <Link
          to="/projects"
          className={`${actionStyle} bg-white text-blue-800 hover:bg-blue-50`}
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className={`${actionStyle} border border-slate-300 text-white hover:bg-slate-700`}
        >
          Contact
        </Link>
      </div>
      {message && (
        <p className="mt-3 min-h-5 text-sm text-slate-200">{message}</p>
      )}
    </div>
  );
};

export default HomeInfo;
