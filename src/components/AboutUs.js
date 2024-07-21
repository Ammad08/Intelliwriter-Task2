import React from 'react';

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <>
    <div className="bg-[#0F062C] flex items-center justify-center text-center py-24">
      <button
        onClick={handleScroll}
        className=" p-5 py-8 text-white border rounded-full transition-all duration-300  hover:text-[#0F062C]"
      > 
      </button>
    </div>
    
    <div className="  bg-[#0F062C] flex items-center justify-center text-center">
    <h2 className="lg:text-6xl text-5xl  font-normal relative lg:p-10 md:p-6 p-2">
      <span className="border-text text-white opacity-50  absolute md:top-3 lg:top-4 top-0 lg:left-10">
        Our Story &
      </span>
      <span className="gradient-span-1 text-[#E766FF] relative lg:p-6 p-6 font-[600]">
        ABOUT US
      </span>
    </h2>
  </div>
  <div className="text-white  md:px-16 pb-11 md:p-0 font-normal md:text-2xl pt-8 bg-[#0F062C] flex items-center justify-center text-center">
        Intelliwriter is an AI-based content generator designed to simplify and<br/>
        enhance your writing experience. Whether you are a content creator,<br/>
        marketer,student, or business owner, Intelliwriter is here to take your<br/>
        content creation process to a whole new level.
      </div>

  </>
  );
};
export default ScrollButton;

