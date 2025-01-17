import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="bg-[#0F062C] relative text-white py-2 text-center justify-center items-center text-5xl font-bold font-serif">
        <div className="w-full  h-[470px] -mb-10 sticky">
          <div className="w-full h-[300px]  absolute -top-10 left-0 -z-0"></div>
          <div className="w-full h-[300px]  absolute bottom-0 left-0 -z-0"></div>
          <div className="w-full h-[400px] opacity-30 absolute flex flex-col justify-between -z-10">
            <div className="border-b h-1 border-white w-full "></div>
            <div className="border-b h-1 border-white w-full "></div>
            <div className="border-b h-1 border-white w-full "></div>
            <div className="border-b h-1 border-white w-full "></div>
            <div className="border-b h-1 border-white w-full "></div>
            <div className="border-b h-1 border-white w-full sm:hidden block"></div>
            <div className="border-b h-1 border-white w-full sm:hidden block"></div>
          </div>
          <div className="w-full opacity-30 h-[500px] flex absolute -top-10 justify-between -z-10">
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] "></div>
            <div className="border-l w-1 border-white h-[500px] sm:block hidden"></div>
            <div className="border-l w-1 border-white h-[500px] md:block hidden"></div>
            <div className="border-l w-1 border-white h-[500px] md:block hidden"></div>
            <div className="border-l w-1 border-white h-[500px] md:block hidden"></div>
            <div className="border-l w-1 border-white h-[500px] md:block hidden"></div>
          </div>
          <div className="lg:p-20 py-10 px-3 relative w-full h-[425px] flex justify-between gap-6 md:flex-row flex-col items-center z-30">
            <div className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold">
              <div className="lg:w-20 lg:h-20  md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="lg:text-5xl md:text-4xl text-3xl text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M24 9.736V9.72c0-.018-.009-.035-.009-.053-.008-.017-.008-.034-.017-.052 0-.009-.009-.009-.009-.017a.19.19 0 0 0-.026-.044v-.009c-.009-.017-.026-.026-.044-.043l-.008-.009c-.018-.009-.035-.026-.053-.035l-3.72-2.143V3.02c0-.018 0-.044-.008-.061V2.94a.124.124 0 0 0-.017-.052V2.88c-.01-.017-.018-.035-.027-.043 0-.01-.008-.01-.008-.01a.19.19 0 0 0-.035-.043c-.018-.008-.026-.026-.044-.034-.008 0-.008-.01-.017-.01l-.009-.008L16.055.476a.338.338 0 0 0-.34 0l-3.72 2.143L8.286.476a.338.338 0 0 0-.34 0L4.06 2.723c-.01 0-.01.01-.01.01-.008 0-.008.008-.017.008-.017.009-.026.026-.043.035a.153.153 0 0 0-.035.043l-.009.009c-.008.017-.017.026-.026.044v.008c-.009.018-.009.035-.017.052v.018c0 .017-.009.043-.009.06v4.296L.166 9.457c-.018.01-.035.026-.053.035l-.008.009-.044.043v.01c-.009.017-.017.025-.026.043 0 .008-.009.008-.009.017a.124.124 0 0 0-.017.052C0 9.684 0 9.701 0 9.72v4.521a.34.34 0 0 0 .166.296l3.72 2.143v4.295a.34.34 0 0 0 .165.296l3.885 2.248c.009.008.018.008.026.017 0 0 .009 0 .009.009.009 0 .017.008.026.008.009 0 .009 0 .018.01.008 0 .017 0 .026.008h.061a.35.35 0 0 0 .13-.026c.018-.009.026-.009.044-.018l3.72-2.143 3.72 2.143c.017.009.026.018.043.018a.35.35 0 0 0 .13.026h.062c.008 0 .017 0 .026-.009.008 0 .008 0 .017-.009.009 0 .018-.008.026-.008.009 0 .009 0 .009-.009.009 0 .017-.009.026-.017l3.885-2.248a.34.34 0 0 0 .166-.296V16.68l3.72-2.143a.34.34 0 0 0 .165-.296V9.754c.009-.01.009-.018.009-.018zM12.17 20.67s-.009 0-.009-.009c-.009-.008-.017-.008-.035-.017-.008 0-.017-.009-.026-.009-.009 0-.017-.009-.035-.009-.008 0-.026-.008-.035-.008h-.069c-.009 0-.026 0-.035.008-.009 0-.017 0-.035.01-.009 0-.017.008-.026.008-.009.009-.017.009-.035.017 0 0-.009 0-.009.009l-3.37 1.951v-3.702l3.545-2.047 3.545 2.047v3.702zM4.4 7.793c.017-.017.025-.026.034-.026.009-.008.018-.008.026-.017l.026-.026c.01-.009.018-.018.018-.026.009-.01.009-.018.017-.026.009-.01.009-.018.018-.027.008-.008.008-.017.008-.034 0-.01.01-.018.01-.035 0-.009 0-.018.008-.035V3.603L7.77 5.46v4.094L4.225 11.6 1.02 9.745zm7.596-4.381l3.545 2.047V9.16l-3.38-1.951s-.009 0-.009-.009c-.008-.009-.017-.009-.034-.017-.01 0-.018-.009-.027-.009-.008 0-.017-.009-.034-.009-.01 0-.018-.008-.035-.008h-.07c-.009 0-.026 0-.035.008-.008 0-.017 0-.035.009-.008 0-.017.009-.026.009-.008.008-.026.008-.035.017 0 0-.008 0-.008.009L8.45 9.16v-3.7zm0 12.675L8.45 14.04V9.945l3.546-2.047 3.545 2.047v4.095zm-7.431-3.903l3.206-1.856v3.947c0 .008 0 .017.008.035 0 .008.009.017.009.034 0 .01.009.018.009.035.008.009.008.018.017.026.009.01.009.018.018.027.008.008.017.017.017.026l.026.026c.009.009.018.017.026.017.009.009.018.018.026.018l.01.008 3.38 1.952-3.207 1.855-3.545-2.047zm11.325 6.15l-3.206-1.855 3.38-1.952.009-.008c.008-.009.017-.018.026-.018.008-.008.017-.008.026-.017l.026-.026c.009-.009.017-.018.017-.026.01-.01.01-.018.018-.027.009-.008.009-.017.017-.026.009-.008.009-.017.009-.035 0-.008.009-.017.009-.034 0-.01 0-.018.008-.035v-3.947l3.206 1.856v4.094zm3.885-6.734l-3.546-2.047V5.46l3.206-1.856V7.55c0 .008 0 .017.009.034 0 .01.009.018.009.035 0 .009.008.018.008.035.01.009.01.018.018.026.008.009.008.018.017.026.009.01.018.018.018.026.008.01.017.018.026.027.008.008.017.017.026.017.009.009.017.017.026.017l.009.01 3.38 1.95zM15.89 1.164l3.205 1.856-3.205 1.855-3.206-1.855zm-7.78 0l3.206 1.856L8.11 4.866 4.905 3.02zM.68 10.337l3.205 1.856v3.702L.68 14.04zM7.77 22.62l-3.205-1.855v-3.703l3.206 1.856zm11.665-1.846l-3.206 1.855v-3.702l3.206-1.856zm3.886-6.734l-3.206 1.855v-3.702l3.206-1.856Z"></path>
                </svg>
              </div>
              <span>Intelli. GPT-4</span>
            </div>
            <div className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold">
              <div className="lg:w-20 lg:h-20  md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className="lg:text-5xl md:text-4xl text-3xl text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M252.49,87.51l-38-38a12,12,0,0,0-17,0L168,79,136.49,47.51a12,12,0,0,0-17,0L88,79,58.49,49.51a12,12,0,0,0-17,0l-38,38a12,12,0,0,0,0,17l38,38a12,12,0,0,0,17,0L88,113l23,23L79.51,167.51a12,12,0,0,0,0,17l40,40a12,12,0,0,0,17,0l40-40a12,12,0,0,0,0-17L145,136l23-23,29.51,29.52a12,12,0,0,0,17,0l38-38A12,12,0,0,0,252.49,87.51ZM50,117,29,96,50,75,71,96Zm78,82-23-23,23-23,23,23Zm0-80L105,96l23-23,23,23Zm78-2L185,96l21-21,21,21Z"></path>
                </svg>
              </div>
              <span>Intelli. Imagine</span>
            </div>
            <div className="p-3 md:border-2 border flex gap-4 justify-between items-center border-white rounded-full text-white lg:text-2xl md:text-xl text-lg pr-4 font-semibold">
              <div className="lg:w-20 lg:h-20  md:w-16 md:h-16 w-12 h-12 rounded-full border border-white bg-gradient-to-tr from-[#a65dff]/40 to-transparent flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  className="lg:text-5xl md:text-4xl text-3xl text-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M.331 11.378s.5418-.089.765.1439c.2234.2332.077.7156-.2195.7237-.2965.01-.5705.063-.765-.1439-.1946-.2066-.1424-.6218.2195-.7237m5.881 3.2925c-.0522.01-.1075-.018-.164-.059-.3884-.5413-.5287-2.3923-.707-2.5025-.185-.1144-.8545 1.0255-2.1862.903-.5569-.051-1.1236-.4121-1.4573-.662.031-.4206.0364-1.4027.8659-1.0833.5038.1939 1.3667.7266 2.1245-.23.8378-1.0579 1.2999-.7506 1.577-.5206.2771.23.0925 1.4259.5058 1.0916.4133-.3343 2.082-2.4103 2.082-2.4103s1.292-1.303 1.4898.067c.1979 1.3698 1.0403 2.8877 1.2635 2.8445.2234-.043 2.8223-5.3253 3.1945-5.666.3722-.3409 1.6252-.2961 1.5657.5781-.0596.8742-.1871 6.308-.1871 6.308s-.147 1.5311.0924.7128c.0992-.3392.206-.6453.3392-1.0024.6414-2.0534 1.734-5.5613 2.2784-7.3688.1252-.4325.233-.8037.3166-1.0891l.0001-.0008a3.5925 3.5925 0 0 1 .0973-.3305c.0455-.1532.0763-.2546.0858-.2813.0243-.068.0925-.1192.1884-.157.0962-.061.1995-.064.3165-.067.3021-.027.6907.012 1.0401.1119.1018 0 .2125.037.3172.1118v.0001s.0063 0 .0151.01c.0023 0 .0048 0 .0073.01.0219.015.0573.045.0983.095.0012 0 .0025 0 .004.01.017.021.0341.045.0515.073.1952.2863.315.814.1948 1.7498-.2996 2.3354-.5316 7.1397-.5316 7.1397s-.0461.2298.4353-.782c.0167-.035.0383-.066.058-.098.026-.017.0552-.042.0913-.085.2974-.3546 1.0968-.5629 1.6512-.5586.2336.028.4293.087.5462.1609.2188.333.0897 1.562.0897 1.562-.4612.043-1.3403.2908-1.6519.3366-.3118.046-.7852 2.0699-1.4433 1.8629-.6581-.2069-2.1246-1.1268-2.1246-1.2533 0-.1102.1152-1.4546.1453-1.8016.0022-.024.004-.046.0058-.068a.152.152 0 0 1 .0014-.014l-.0002.0003c.0213-.2733.0023-.3927-.1239-.1199-.1086.2346-.581 1.7359-1.1078 3.3709-.0556.1429-1.0511 3.1558-1.1818 3.5231-.156.4261-.287.7523-.3776.921-.1378.1867-.3234.3036-.5826.2252-.6465-.1954-1.4654-1.0889-1.473-1.3106-.0155-1.2503.0608-7.973-.2423-7.4127-.311.5744-2.73 4.5608-2.73 4.5608-.0405.01-.0705.01-.1062.01-.1712-.019-.4366-.074-.51-.2384-.004-.01-.0094-.018-.0129-.028-.0035-.01-.0075-.022-.0135-.04-.0329-.1097-.0463-.2289-.0753-.3265-.1082-.3652-.2813-.8886-.463-1.421-.2784-.9079-.5654-1.8366-.6127-1.9391-.0923-.2007-.2268-.116-.3475-.0002-.54.458-1.6868 2.4793-2.7225 2.5898"></path>
                </svg>
              </div>
              <span>Intelli. Voice</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0F062C] justify-center pt-14 lg:py-24  pb-28 p-5">
        <h2 className="lg:text-6xl text-5xl font-normal relative lg:p-10   md:p-10 p-4 ">
          <span className="border-text text-white opacity-50 absolute md:top-3 lg:top-4 top-0 md:left-24">
            DISTINCTIVE
          </span>
          <span className="gradient-span-1 text-[#EE58FF] relative md:left-14 lg:p-6 p-6 font-[600]">
            FEATURES
          </span>
        </h2>
        <p className="text-white items-center text-start md:px-24 p-3 pt-8 text-lg md:text-2xl leading-10 lg:leading-normal">
          Our team of professionals has deep experience in AI development and an
          unwavering commitment to your security and privacy. Discover the power
          of our innovative features designed to unleash your potential and
          drive success.
        </p>
      </div>
    </>
  );
};

export default Section5;
