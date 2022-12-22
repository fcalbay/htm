import { useState } from "react";

export const useHotelRoomSearch = (hotelRooms) => {
  const [filteredRooms, setFilteredRooms] = useState(hotelRooms);

  const handleSearchKeyword = (e) => {
    const query = e.target.value?.toLowerCase();
    if (!query) return setFilteredRooms(hotelRooms);

    const filtered = hotelRooms.filter(({ name, description }) => {
      return (
        name.toLowerCase().includes(query) ||
        description.toLowerCase().includes(query)
      );
    });
    setFilteredRooms(filtered);
  };

  return {
    filteredRooms,
    handleSearchKeyword,
  };
};
