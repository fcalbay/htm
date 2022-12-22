import { useState } from "react";

function HotelRoom({ roomData }) {
  const {
    name,
    description,
    floorArea,
    liftDistanceId,
    villageCentreDistanceId,
  } = roomData;
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 lg:w-1/2 hover:bg-gray-100">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="team"
          className="flex-shrink-0 rounded-md w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src="https://api.lorem.space/image/house?w=200&h=200&hash=as"
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {name}
          </h2>
          <div className="text-left">
            <p className="mb-4 text-sm">{description}</p>
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-400">Floor Size: {floorArea}sqm</p>
            <p className="text-xs text-gray-400">
              Lifts within: {liftDistanceId}m
            </p>
            <p className="text-xs text-gray-400">
              Village Center within: {floorArea}m
            </p>
          </div>
          <button className="w-full md:w-1/4 text-cyan-900 hover:text-white hover:bg-cyan-900 border-2 border-cyan-900 py-2 my-4 px-6 focus:outline-none  rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelRoom;
