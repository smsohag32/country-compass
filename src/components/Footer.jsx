const Footer = () => {
  return (
    <footer className="bg-gradient-to-r text-white from-[#0d1a36] to-[#0d1a35] py-12 flex items-center justify-center">
      <div className="flex items-center">
        <p>
          Country Compass All Right Reserved Website &copy;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
