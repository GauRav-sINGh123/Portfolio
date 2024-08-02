import { Link } from "react-router-dom";

function Navbar() {
  return (
   <div className="w-full flex justify-center items-center">
     <header className="  border py-3 shadow mt-6 rounded-3xl w-[96%]  md:w-[40%] border-purple-400 bg-clip-padding backdrop-filter backdrop-blur-3xl">
      <div className="px-4">
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <Link to="/">
            <p className="text-white cursor-pointer hover:text-gray-300 font-semibold hover:scale-105 transition-all ease-in-out">
              Home
            </p>
          </Link>
          <Link to={"/projects"}>
          <p className="text-white cursor-pointer hover:text-gray-300 font-semibold hover:scale-105 transition-all ease-in-out">
            Projects
          </p>
          </Link>
          <Link to="/skills">
            <p className="text-white cursor-pointer hover:text-gray-300 font-semibold hover:scale-105 transition-all ease-in-out">
              Skills
            </p>
          </Link>
         <Link to={"/about"}>
         <p className="text-white cursor-pointer hover:text-gray-300 font-semibold hover:scale-105 transition-all ease-in-out">
           About
          </p>
         </Link>
        </div>
      </div>
    </header>
   </div>
  );
}

export default Navbar;
