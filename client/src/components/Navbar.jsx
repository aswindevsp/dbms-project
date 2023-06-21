import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigateTo = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("id");
    navigateTo("/");
  };

  const id = sessionStorage.getItem("id");

  return (
    <div className="h-16 bg-black flex items-center w-screen p-5">
      <h1 className="text-2xl font-bold text-white">Logo?</h1>
      <div className="flex justify-end gap-5 w-full ">
        {id ? (
          <>
          <Link to="/cart">
            <h1 className="text-2xl font-bold text-white">Cart</h1>
          </Link>
          <Link to="/OrderPage">
            <h1 className="text-2xl font-bold text-white">OrderPage</h1>
          </Link>
          <li>
              <button className=" text-white" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <h1 className="text-2xl font-bold text-white">Login</h1>
            </Link>
            <Link to="/signup">
              <h1 className="text-2xl font-bold text-white">Sign Up</h1>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
