const Landing = () => {
  return (
    <div className="w-screen h-screen flex gap-5">
      <div className="w-1/2 h-full bg-black/90 flex justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Landing Image Main</h1>
      </div>
      <div className="w-1/2 h-full flex flex-col gap-5">
        <div className="w-full h-1/2 bg-black/90 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Landing Sub 1</h1>
        </div>
        <div className="w-full h-1/2 bg-black/90 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">Landing Sub 2</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
