import { BsSunFill } from "react-icons/bs";

export function Navbar() {
  return (
    <nav className="py-10 mb-4 flex justify-between">
      <h1 
        className="
          text-2xl bg-gradient-to-r from-cyan-500 to-gray-700 text-white p-2 
          rounded-full md:text-4xl lg:text-4xl"
      >
        GC
      </h1>
      <ul className="flex items-center gap-4">
        <li>
          <a
            href="#"
            className="
              bg-gradient-to-r from-cyan-500 to-gray-700 text-white px-4 py-2 rounded-md font-bold"
          >
            Resume
          </a>
        </li>
        <li>
          <BsSunFill className="cursor-pointer text-2xl" />
        </li>
      </ul>
    </nav>
  );
}
