import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 rounded-md flex flex-col align-start justify-center items-left gap-5 px-20 py-5">
        <h1 className="text-2xl text-black font-bold">
          <span className=" font-extrabold"> Welcome to GameStop </span> <br />
          <span className=" font-extralight text-lg">
            {" "}
            Sign in to your GameStop account{" "}
          </span>
        </h1>
        <input
          type="text"
          placeholder="UserName"
          className="h-16 p-2 border border-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="h-16 p-2 border border-black"
        />
        <div className="">
          <Link to="/">
            <button className="h-16 w-full p-2 text-center text-black bg-red-500 hover: bg-red-300 hover:text-white transition-all ease-in-out duration-500">
              Login
            </button>
          </Link>
        </div>
        <Link to="/signup">
          <h1 className="text-sm text-white cursor-pointer">Or Signup?</h1>
        </Link>
      </div>
    </div>
  );
};

export default Login;
