import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        aria-label="Changjian Xiong, home"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">CX</p>
      </NavLink>
      <nav
        aria-label="Main navigation"
        className="flex gap-4 text-sm font-medium sm:gap-7 sm:text-lg"
      >
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-slate-900"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
