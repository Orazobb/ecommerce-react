import girl from "../img/girl.jpeg";
import woman_hero from "../img/woman_hero.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-red-500 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      {/* */}
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center">
            <div className="w-12 h-[3px] bg-red-600 mr-3"></div>
            New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1]">
            Lorem ipsum dolor sit amet.
            <br />
            <span className="font-semibold">hello world</span>
          </h1>
          <NavLink
            className="self-start font-semibold border-b-2 border-primary"
            to={"/"}
          >
            Discover More
          </NavLink>
        </div>
        {/* image */}
        <div className="hidden lg:block relative">
          {/* <img src={girl} alt="i" className="rounded-xl" /> */}
          <img src={woman_hero} alt="i" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
