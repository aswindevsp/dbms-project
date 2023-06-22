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
            className="w-56 bg-black/90 text-white flex flex-col justify-center items-center cursor-pointer font-bold hover:scale-110 transition-all ease-in-out duration-500"
          >
            <img src={value.img} alt={value.title} className="w-full h-full" />
          </div>
        ))}
      </div>
      {showModal && (
        <div className="fixed top-0 min-w-screen min-h-screen bg-white flex justify-center items-center">
          <div className="relative w-5/6 min-h-[600px] bg-black/90 rounded-md p-5 text-white font-semibold">
            <h1
              className="text-5xl text-white font-bold absolute top-5 right-5 cursor-pointer"
              onClick={() => {
                setModalData(null);
                setShowModal(false);
              }}
            >
              *
            </h1>
            <div className="w-full h-full flex gap-5">
              <div className="min-w-[500px]">
                <img
                  src={modalData.img}
                  alt={modalData.name}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2 h-full">
                <h1 className="text-3xl font-bold">{modalData.title}</h1>
                <div className="flex gap-20 items-center">
                  <h1 className="text-2xl">{modalData.developer}</h1>
                  <h1 className="text-md italic">{modalData.release}</h1>
                </div>
                <h1 className="text-2xl underline">{modalData.price}</h1>
                <h1 className="text-sm pt-6">{modalData.desc}</h1>
                <h1 className="text-2xl font-bold underline">Specifications</h1>
                <div className="grid grid-rows-2 grid-cols-3 gap-2">
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Order Attributes:</h1>
                    <h1 className="text-sm">UPC {modalData.spec.upc}</h1>
                  </div>
                  <div className=" row-span-1 col-span-2">
                    <h1 className="text-sm">General:</h1>
                    <div className="flex  gap-5 items-center">
                      <h1 className="text-sm">UPC {modalData.spec.upc}</h1>
                      <h1>|</h1>
                      <h1 className="text-sm">
                        Brand Name: {modalData.spec.brand}
                      </h1>
                      <h1>|</h1>
                      <h1 className="text-sm">
                        Vendor: {modalData.spec.vendorNo}
                      </h1>
                    </div>
                  </div>
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Gameplay:</h1>
                    <div className="flex  gap-5 items-center">
                      <h1 className="text-sm">
                        Player(s): {modalData.spec.noOfPlayer}
                      </h1>
                      <h1>|</h1>
                      <h1 className="text-sm">Genre: {modalData.spec.genre}</h1>
                    </div>
                  </div>
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Compatability:</h1>
                    <h1 className="text-sm">
                      Platforms: {modalData.spec.platforms}
                    </h1>
                  </div>
                  <div className=" row-span-1 col-span-1">
                    <h1 className="text-sm">Fandom:</h1>

                    <h1 className="text-sm">
                      Franchise: {modalData.spec.franchise}
                    </h1>

                    <h1 className="text-sm">
                      Publisher: {modalData.spec.publisherName}
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
