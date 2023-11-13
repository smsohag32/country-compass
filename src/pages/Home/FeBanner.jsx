import { Link } from "react-router-dom";

const FeBanner = () => {
  return (
    <div className="py-16 bg-gradient-to-tr from-blue-950 via-purple-900 to-blue-500 text-white">
      <div className="my-container items-center flex flex-col gap-20 text-center md:text-start md:flex-row">
        <div className="w-full relative overflow-hidden md:overflow-visible">
          <img
            src="https://images.unsplash.com/photo-1624965085187-addbe3a92e34?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Explore the World"
            className="md:w-full  mx-auto mb-8 w-80 rounded-md shadow-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1643400812282-4ef456a7b352?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Explore the World"
            className="md:w-full absolute top-5 left-10 mb-8 w-80 rounded-md shadow-lg"
          />
        </div>
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">Explore the World with Us</h2>
          <p className="text-lg mb-8">
            Discover amazing destinations and create unforgettable memories.
          </p>
          <Link
            to="/populars"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeBanner;
