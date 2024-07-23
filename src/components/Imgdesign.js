import React from "react";
import Animation from "./Animation";

export default function Imgdesign() {
  return (
    <>
    {/* 
      <div className="bg-[#0F062C]   py-20 items-center text-center justify-center lg:flex text-white lg:p-4 md:px-5 lg:py-20 font-serif font-bold">
        <div className="lg:flex lg:w-1/2">
          <img
            className="w-full md:w-auto lg:w-fit items-center justify-center text-center"
            src="Section2.png"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 lg:text-left lg:px-5">
          <h1 className="text-3xl p-6 py-10 md:p-0 md:text-6xl sm:mt-10 ">
            Innovative <span className="text-[#EF59FF]">Image</span> Design
          </h1>
          <p className="  lg:pt-8 p-5 md:p-0 md:text-2xl leading-10 lg:leading-normal">
            The Intelliwriter Image Generator Module is a powerful addition to
            the Intelliwriter platform, enabling users to effortlessly create
            custom images that enhance their written content. With intuitive
            controls and advanced algorithms, this module ensures a seamless
            integration of dynamic visuals, elevating the overall impact and
            engagement of your message across various platforms.
          </p>
        </div>
      </div>
      */}


<div className="bg-[#0F062C] md:py-6 items-center  justify-center  lg:flex text-white lg:p-4 md:px-5 lg:py-20 ">
      <div className="lg:w-1/2 order-1 lg:order-2">
          <img
            className="w-full md:w-auto lg:w-fit"
            src="Section2.png"
            alt="Voice Experience"
          />
        </div>
        
        <div className=" text-white  lg:p-4 md:px-5   lg:w-1/2  order-2 lg:order-2">
          <h1 className="text-3xl p-6 py-14 md:p-0 md:text-6xl md:py-2 ">
          Innovative <span className="text-[#EF59FF]">Image</span> Design
          </h1>
          <p className="lg:pt-8 p-5 lg:p-0 md:text-2xl leading-10 lg:leading-normal">
          The Intelliwriter Image Generator Module is a powerful addition to
            the Intelliwriter platform, enabling users to effortlessly create
            custom images that enhance their written content. With intuitive
            controls and advanced algorithms, this module ensures a seamless
            integration of dynamic visuals, elevating the overall impact and
            engagement of your message across various platforms.
          </p>
        </div>
        
      </div>



      <div className="bg-[#0F062C] md:py-6 items-center  justify-center  lg:flex text-white lg:p-4 md:px-5  ">
      <div className="lg:w-1/2 order-1 lg:order-2">
          <img
            className="w-full md:w-auto lg:w-fit"
            src="Section3.png"
            alt="Voice Experience"
          />
        </div>
        
        <div className=" text-white  lg:p-4 md:px-5   lg:w-1/2  order-2 lg:order-1">
          <h1 className="text-3xl p-6 py-14 md:p-0 md:text-6xl sm:mt-10 ">
            Enhance <span className="text-[#EF59FF]">Voice</span> Experience
          </h1>
          <p className="lg:pt-8 p-5 lg:p-0 md:text-2xl leading-10 lg:leading-normal">
            Discover the impact of professional voice-overs with our
            cutting-edge voice services. Ideal for both novices and seasoned
            professionals, our platform not only enhances your projects with
            high-quality audio but also offers a unique voice replication
            feature. With intuitive controls and advanced technology, you can
            input a voice sample and generate the same voice tone across your
            projects, ensuring consistency and quality.
          </p>
        </div>
        
      </div>

      <div className="bg-[#0F062C] justify-center pt-14 lg:py-24  pb-28 p-5">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10   md:p-10 p-4 ">
          <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 md:left-24">
            GET STARTED WITH
          </span>
          <span className="gradient-span-1 text-[#EE58FF] relative md:left-14 lg:p-6 p-6 font-[600]">
            IMAGES &amp; NFTS
          </span>
        </h2>
        <p className="text-white items-center text-start md:px-24 p-3 pt-8 text-lg md:text-2xl leading-10 lg:leading-normal">
          Begin your creative odyssey with Images & NFTs. Immerse yourself in a
          realm where art merges with innovation, enabling exploration,
          creation, and sharing of your distinct vision through digital marvels
          and NFTs. Start now to ignite limitless digital creativity.
        </p>
      </div>
<Animation/>
      <div className="bg-[#0F062C] justify-center pt-14 lg:py-24  pb-28 p-5">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10   md:p-10 p-4 ">
          <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 md:left-24">
            DEALING WITH
          </span>
          <span className="gradient-span-1 text-[#EE58FF] relative md:left-14 lg:p-6 p-6 font-[600]">
            ADVANCE AI LLMs
          </span>
        </h2>
        <p className="text-white items-center text-start md:px-24 p-3 pt-8 text-lg md:text-2xl leading-10 lg:leading-normal">
          Start your journey with GPT-4, the latest in Advanced AI LLMs, and
          discover a world where technology enhances creativity. Explore how you
          can create compelling content and voiceovers, bringing your unique
          ideas to life. Begin your adventure today and experience the joy of
          creativity unleashed in the digital world.
        </p>
      </div>
    </>
  );
}
