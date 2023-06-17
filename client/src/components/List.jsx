import { useState } from "react";

/* eslint-disable react/prop-types */
const List = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  return (
    <div className="w-screen">
      <div className="flex gap-5 flex-wrap  m-5">
        {data.map((value, index) => (
          <div
            key={index}
            onClick={() => {
              setModalData(value);
              setShowModal(true);
            }}
            className="w-56 h-56 bg-black/90 text-white flex flex-col justify-center items-center cursor-pointer font-bold hover:scale-110 transition-all ease-in-out duration-500"
          >
            <h1>{value.name}</h1>
            <h1>{value.rating}</h1>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed top-0 w-screen h-screen bg-white flex justify-center items-center">
          <div className="relative w-1/2 h-1/2 bg-black/90 rounded-md flex flex-col justify-center items-center gap-5 p-5 text-white text-3xl font-bold">
            <h1
              className="text-5xl text-white font-bold absolute top-5 right-5 cursor-pointer"
              onClick={() => {
                setModalData(null);
                setShowModal(false);
              }}
            >
              *
            </h1>
            <h1>{modalData.name}</h1>
            <h1>{modalData.rating}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
