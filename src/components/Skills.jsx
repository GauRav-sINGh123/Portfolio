import { skill } from "../constants/constant";

function Skills() {
  return (
    <div className="w-full h-[80%]   ">
      <h2 className="text-center text-5xl text-white font-semibold mt-[40px]">
        Skills
      </h2>
      <div className=" text-white p-10 grid grid-cols-1 sm:grid-cols-5 gap-7 mt-16  place-items-center">
        {skill.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center w-24 rounded-md p-3 bg-white hover:scale-105 transition-all ease-in-out cursor-pointer  shadow-lg drop-shadow-sm shadow-indigo-700 "
            >
              <img
                src={item.img}
                alt=""
                className=" object-fit  rounded-full "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
