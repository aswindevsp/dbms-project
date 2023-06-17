import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-black flex items-center w-screen p-5">
      <h1 className="text-2xl font-bold text-white">Logo?</h1>
      <div className="flex justify-end gap-5 w-full ">
        <Link to="/cart">
          <h1 className="text-2xl font-bold text-white">Cart</h1>
        </Link>
        <Link to="/login">
          <h1 className="text-2xl font-bold text-white">Login</h1>
        </Link>
        <Link to="/signup">
          <h1 className="text-2xl font-bold text-white">Sign Up</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
