import { FaSearch } from "react-icons/fa";

function Input({ onKeyUp }) {
  return (
    <>
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        name="search"
        placeholder="Search"
        onKeyUp={onKeyUp}
      />
      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
        <FaSearch />
      </button>
    </>
  );
}

export default Input;
