import { useEffect, useState } from "react";
import SliderCom from "../Slider/Slider";
import { getSpecificCategory } from "../../data/store";

export default function Home() {
  const [allJewelery, setAllJewelery] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getSpecificCategory("jewelery");
      setAllJewelery(response);
    };
    fetchPosts();
  }, [setAllJewelery]);

  return (
    <>
      <div
        className="h-[20rem] flex items-center justify-center md:bg-black bg-cover bg-center w-full "
        style={{ backgroundImage: "url('/Images/pexels-photo-1884581.png')" }}
      >
        <div className="flex flex-col items-center text-center p-8 bg-gray-700 md:bg-black bg-opacity-75 rounded-md">
          <div className="text-4xl font-serif font-bold text-white mb-4">
            Welcome to Our Shop!
          </div>
          <p className="text-lg font-mono text-white ">
            Discover amazing products and great deals!
          </p>
        </div>
      </div>
      <h1 className="text-center mt-5 font-bold underline text-2xl">Jewelry</h1>
      <SliderCom cat={allJewelery} />
      <div className="mt-20"></div>
    </>
  );
}
