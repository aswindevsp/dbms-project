import Landing from "../components/Landing";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Main = () => {
  const tempList = [
    { name: "ToA", rating: "Peak" },
    { name: "DS", rating: "PEAK" },
    { name: "NeeeR", rating: "Mid" },
    { name: "ToA", rating: "Peak" },
    { name: "DS", rating: "PEAK" },
    { name: "NeeeR", rating: "Mid" },
    { name: "ToA", rating: "Peak" },
    { name: "DS", rating: "PEAK" },
    { name: "NeeeR", rating: "Mid" },
    { name: "ToA", rating: "Peak" },
    { name: "DS", rating: "PEAK" },
    { name: "NeeeR", rating: "Mid" },
  ];
  return (
    <div>
      <Navbar />
      <Landing />
      <div className="flex justify-center my-6">
        <div className="bg-black h-[3px] w-1/2 my-2">
      </div></div>
      <List data={tempList} />
    </div>
  );
};

export default Main;
