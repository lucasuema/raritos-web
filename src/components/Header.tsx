import Image from 'next/image';
import mintHeaderDesktop from '../../public/header-mint-desktop.gif';

export default function Header() {
  return (
    <div className=" bg-black flex text-lg sticky top-0 w-full items-center justify-center h-[64px] md:h-[80px] z-30">
      <div className="flex pl-10 left-0 absolute gap-4 justify-start ">
        <div className="hidden lg:block">Twitter</div>
      </div>
      <div className=" p-2 sm:p-0 text-[50px] flex justify-center w-fit  ">The Raritos 👹</div>
      <div className="absolute right-0 pr-10 hidden lg:block">
        <div className="text-lg  text-white w-[180px] h-[50px] flex items-center justify-center text-center">
          <Image src={mintHeaderDesktop} alt="Center Image" />
          <div className="absolute">Mint</div>
        </div>
      </div>
    </div>
  );
}
