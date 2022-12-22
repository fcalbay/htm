import MenuItem from "../MenuItem";

function Menu() {
  return (
    <div className="lg:flex lg:flex-row space-x-4 tracking-widest h-full lg:visible hidden">
      <MenuItem>Stay</MenuItem>
      <MenuItem>The Hotel</MenuItem>
      <MenuItem>Eat Drink</MenuItem>
      <MenuItem>Wellbeing</MenuItem>
      <MenuItem>Concierge</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Special Deals</MenuItem>
    </div>
  );
}

export default Menu;
