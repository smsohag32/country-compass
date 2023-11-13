import { Link } from "react-router-dom";
import world from "../../assets/world.png";
const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] py-24 md:py-0 bg-gradient-to-tr from-white via-blue-500 to-blue-900 flex items-center">
      <div className="my-container items-center flex gap-5 flex-col-reverse md:flex-row">
        <div className="w-full flex items-center justify-center">
          <img src={world} alt="world" className="object-cover" />
        </div>
        <div className="flex w-full flex-col ">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white">
            Explore our World History!
          </h1>
          <p className="mt-3 leading-6 text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            repellat repellendus error exercitationem ut minus aspernatur
            consequuntur debitis, doloremque quasi. Est voluptas, distinctio
            ipsa explicabo labore suscipit dolorum eum ducimus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
