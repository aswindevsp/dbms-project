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
      <List data={tempList} />
    </div>
  );
};

export default Main;
