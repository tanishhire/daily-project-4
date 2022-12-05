import React, { useState } from "react";
import image from './Untitled-1.png';



function App() {
  const [open, setOpen] = useState('')

  return (
    <div className="container mx-auto  justify-center content-center ">
      <div className="flex  flex-col w-[700px] mx-auto mt-14 md:flex-row  h-full bg-white rounded-xl hover:-translate-y-1 hover:scale-105 shadow-lg">
        <div className="w-[300px] h-[300px] mt-20" onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}><img className="rounded-xl " src={open ? image : "https://assets2.razerzone.com/images/pnx.assets/a261310930e05496d0f372160361523c/razer-kraken-bt-kitty-edition.png"} alt="/" /> </div>
        <div className="flex flex-col md:w-1/2 my-4 px-4">
          <div className="my-4 rounded-full w-1/2 bg-[#1a184a] hover:scale-90"><p className="text-white px-2 my-1 text-center text-xs ">Free Shipping</p></div>
          <h1 className="text-sm md:text-2xl font-bold">Razer Kraken Kitty Edition Gaming Headset Quartz</h1>
          <div className="mt-8">
            <p className="line-through text-sm ">1,599/-</p>
            <p className="text-2xl font-bold text-[#1a194c] py-2  hover:">799/-</p>
            <p className="text-xs">The offer is valid till 31st December or as long as the stock lasts!!</p>
          </div>
          <div className="my-4 border-[#2a56c7]">
            <a href="https://www.razer.com/gaming-headsets/razer-kraken-kitty/RZ04-02980200-R3M1" target="__blank"><button className="w-full text-white text-xs  bg-[#4787e9]  rounded-lg shadow-2xl px-2 py-2 transition duration-500 ease-in-out  hover:bg-[#1a184a] transform hover:-translate-y-1 hover:scale-110">
              Add to Cart
            </button></a>
            <p className="text-xs font-semibold mt-4"><span class="green-dot pr-1">●</span>50+ pcs. in stock.</p>
          </div>
          <div className="flex flex-row my-6">
            <div className="flex flex-row mx-auto border-2 border-black rounded-xl border-spacing-1 p-2 text-sm hover:scale-105">  <button  className="flex flex-row  mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"><img className="w-[15px] h-[15px] mx-1 my-1" src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" alt="/" /><p>Add to Cart </p></button></div>
            <div className="flex flex-row mx-auto border-2 border-black rounded-xl border-spacing-1 p-2 text-sm hover:scale-105">  <button className="flex flex-row  mx-auto transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110"><img className="w-[15px] h-[15px] mx-1 my-1" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="/" /><p>Add to Whislist</p></button></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
// https://www.razer.com/gaming-headsets/razer-kraken-kitty/RZ04-02980200-R3M1