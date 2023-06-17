import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-black/90 rounded-md flex flex-col justify-center items-center gap-5 p-5">
        <h1 className="text-2xl text-white font-bold">SignUp</h1>
        <input type="text" placeholder="UserName" className="h-16 w-1/2 p-2" />
        <input
          type="password"
          placeholder="Password"
          className="h-16 w-1/2 p-2"
        />
        <div className="w-1/2">
          <Link to="/">
            <button className="h-16 w-full p-2 text-center text-black bg-white hover:bg-black/60 hover:text-white transition-all ease-in-out duration-500">
              Submit
            </button>
          </Link>
        </div>
        <Link to="/login">
          <h1 className="text-sm text-white cursor-pointer">Or Login?</h1>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
