import { FaSearch } from "react-icons/fa";

import { debounce } from "./helpers/debounce";
import { useHotelRoomSearch } from "./hooks/useHotelRoomSearch";

import HotelRoom from "./components/HotelRoom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import hotelRooms from "./mock/properties.json";
import Input from "./components/Input";

function App() {
  const { filteredRooms, handleSearchKeyword } = useHotelRoomSearch(hotelRooms);

  return (
    <>
      <Header>
        <div className="pt-2 relative mx-auto text-gray-600">
          <Input onKeyUp={debounce(handleSearchKeyword)} />
        </div>
      </Header>
      <div className="container px-5 mx-auto h-1/2">
        <div className="flex flex-wrap -m-4">
          {filteredRooms.map((room) => {
            return <HotelRoom key={`hotel-room-${room.id}`} roomData={room} />;
          })}
          {filteredRooms.length === 0 && (
            <div className="w-full text-center">
              <p>No Room Found. Please try other keywords.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
