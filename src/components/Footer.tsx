export default function Footer() {
  return (
    // bg-[#021e2f]
    <div className=" flex text-lg bottom-0 items-start lg:items-center justify-center h-[100px] lg:h-[100px]">
      <div className="flex  flex-col lg:pl-10 lg:left-0 absolute  lg:justify-start ">
        <div className="block font-primary lg:hidden pt-[52px] font-gotham text-center text-[20px] ">
          Made with 💞 by raritos for raritos.
        </div>
        <div className="hidden font-primary lg:block pt-[52px] lg:pt-[0px] font-gotham text-start text-[20px]">
          Made with 💞 by raritos for raritos.
        </div>
        <div className=" text-start font-primary text-[20px] font-newzald pt-[16px] sm:pt-[0px]">
          Undisclosed creators. No rights reserved.
        </div>
      </div>
      <div className="flex flex-row gap-5 lg:pr-10 lg:right-0 absolute items-center pt-[180px] lg:pt-[0px] lg:justify-start ">
        <a href="https://twitter.com/CarboneXNFT" target="_blank rel" rel="noopener noreferrer"></a>

        <a
          href="https://www.instagram.com/majorfoodgroup/"
          target="_blank rel"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
}
