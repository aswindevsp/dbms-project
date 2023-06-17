import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative w-2/3 h-2/3 bg-black/90 rounded-lg p-5 flex flex-col gap-5">
        <Link to="/">
          <h1 className="text-5xl text-white font-bold absolute top-5 right-5 cursor-pointer">
            *
          </h1>
        </Link>
        <h1 className="text-5xl underline text-white font-bold">Your Cart</h1>
        <div className="w-full h-32 rounded-2xl bg-white"></div>
        <div className="w-full h-32 rounded-2xl bg-white"></div>
        <div className="w-full h-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  );
};

export default Cart;
