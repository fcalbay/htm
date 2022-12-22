import Menu from "../Menu";

function Header({ children }) {
  return (
    <div className="flex flex-col">
      <div className="lg:flex lg:justify-between w-full text-center pt-10 lg:px-48">
        <div>
          <h1 className="text-2xl font-medium title-font text-cyan-900 tracking-widest ">
            HTM Niseko
          </h1>
        </div>
        <Menu />
      </div>

      <div className="flex flex-col text-center w-full mb-20 mt-12 py-10 bg-cyan-900 text-white px-5">
        <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest ">
          Check Availability and Book Now
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, saepe
          veritatis porro pariatur molestiae quibusdam facilis recusandae
          impedit nihil nesciunt vel ipsa tempore quae. Natus sed minus quam sit
          explicabo.
        </p>
        {children}
      </div>
    </div>
  );
}

export default Header;
