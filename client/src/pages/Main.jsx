import Landing from "../components/Landing";
import List from "../components/List";
import Navbar from "../components/Navbar";

const Main = () => {
  const tempList = [
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
    {
      title: "Final Fantasy XVI - PlayStation 5",
      developer: "Square Enix",
      price: "$64.99",
      release: "Release Date: 06/22/2023",
      desc: "The sun is setting upon the land of Valisthea. For centuries, people have flocked to her Mothercrystals to partake of their blessing—the abundant aether that fuels the magicks they rely upon in their everyday lives. But as the aether begins to fade and the lifeless deadlands spread ever further, so too does the struggle over the final flickers of the Mothers' light grow ever more fierce. Bloody battle rages across the realm, rival nations sending their ultimate weapons against each other: the Dominants. Men and women within whom sleep the world-shattering power of an Eikon.There are few in Valisthea whose lives have not been touched by this war for the crystals' blessing, and Clive Rosfield, firstborn son of the Archduke of Rosaria, is no exception. Unlike most, however, the vicissitudes of fate are to reveal to him the dark truth that lies at the heart of his world, and lead him on a mission to destroy those selfsame Mothercrystals the rest of the realm hold sacred.The legacy of the crystals has shaped mankind's destiny for long enough.",
      spec: {
        upc: "662248927152",
        brand: "Square Enix",
        vendorNo: "92715",
        noOfPlayer: "1",
        genre: "RPG",
        platforms: "PlayStation 5",
        franchise: "Final Fantasy",
        publisherName: "Square Enix",
      },
      img: "/gameImages/gaem.webp",
    },
  ];
  return (
    <div>
      <Navbar />
      <Landing />
      <div className="flex justify-center my-6">
        <div className="bg-black h-[3px] w-1/2 my-2"></div>
      </div>
      <List data={tempList} />
    </div>
  );
};

export default Main;
