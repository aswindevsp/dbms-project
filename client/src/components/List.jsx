import { useState } from "react";
import testImage from "../assets/images/test.jpeg";

/* eslint-disable react/prop-types */
const List = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  console.log(data);
  return (
    <div className="w-screen">
      <div className="flex gap-5 flex-wrap justify-center  m-5">
        {data.map((value, index) => (
          <div
            key={index}
            onClick={() => {
              setModalData(value);
              setShowModal(true);
            }}
            className="w-56 bg-black/90 text-white flex flex-col justify-center items-center cursor-pointer font-bold hover:scale-110 transition-all ease-in-out duration-500"
          >
            {/* <img src={value.imageurl} alt={value.title} className="w-full h-full" /> */}
            <img src={testImage} alt={value.title} className="w-full h-full" />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed top-0 min-w-screen min-h-screen bg-white flex justify-center items-center z-50">
          <div className="relative w-5/6 min-h-[600px] bg-black/90 rounded-md p-5 text-white font-semibold">
            <img
              className="absolute top-5 right-5 cursor-pointer w-10 h-10"
              onClick={() => {
                setModalData(null);
                setShowModal(false);
              }}
              src="/x.webp"
            />
            <div className="w-full h-full flex gap-5">
              <img
                // src={modalData.imageurl}
                src={testImage}
                alt={modalData.name}
                className="w-[500px]"
              />

              <div className="flex flex-col gap-2 h-full">
                <h1 className="text-3xl font-bold">{modalData.title}</h1>
                <div className="flex gap-20 items-center">
                  <h1 className="text-2xl">{modalData.developer}</h1>
                  <h1 className="text-md italic">{modalData.release}</h1>
                </div>
                <div className="flex gap-20">
                  <h1 className="text-2xl underline">{modalData.price}</h1>
                  <button className="w-24 h-10 bg-yellow-400 rounded-lg text-black flex justify-center items-center hover:scale-110 transition-transform ease-in-out duration-500">
                    Buy
                  </button>
                </div>
                <h1 className="text-sm pt-6">{modalData.description}</h1>
                <h1 className="text-2xl font-bold underline">Specifications</h1>
                <div className="grid grid-rows-2 grid-cols-3 gap-2">
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Order Attributes:</h1>
                    <h1 className="text-sm">UPC {modalData.upc}</h1>
                  </div>
                  <div className=" row-span-1 col-span-2">
                    <h1 className="text-sm">General:</h1>
                    <div className="flex  gap-5 items-center">
                      <h1 className="text-sm">UPC {modalData.upc}</h1>
                      <h1>|</h1>
                      <h1 className="text-sm">
                        Brand Name: {modalData.brand}
                      </h1>
                      <h1>|</h1>
                      <h1 className="text-sm">
                        Vendor: {modalData.vendorNo}
                      </h1>
                    </div>
                  </div>
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Gameplay:</h1>
                    <div className="flex  gap-5 items-center">
                      <h1 className="text-sm">
                        Player(s): {modalData.noOfPlayer}
                      </h1>
                      <h1>|</h1>
                      <h1 className="text-sm">Genre: {modalData.genre}</h1>
                    </div>
                  </div>
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Compatability:</h1>
                    <h1 className="text-sm">
                      Platforms: {modalData.platforms}
                    </h1>
                  </div>
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Fandom:</h1>

                    <h1 className="text-sm">
                      Franchise: {modalData.franchise}
                    </h1>

                    <h1 className="text-sm">
                      Publisher: {modalData.publisherName}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
