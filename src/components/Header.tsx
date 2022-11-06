import Image from 'next/image';
import twitterOnHover from '../../public/twitter-onHover.svg';

export default function Header() {
  return (
    <div className=" bg-black flex text-lg sticky top-0 pt-12 w-full items-center justify-center h-[64px] md:h-[80px] z-30">
      <div className=" p-2 sm:p-0 text-[45px] md:text-[90px] font-primary flex md:justify-center w-full pl-8 md:pl-0  ">
        The Raritos
      </div>
      <div className="absolute right-0 pr-10 ">
        <div className="text-lg text-white hover:animate-pulse w-[180px] h-[50px] flex items-center justify-end md:justify-center text-center">
          <a
            href="https://twitter.com/RARITOS_FAMILY"
            target="_blank rel"
            rel="noopener noreferrer"
          >
            <Image src={twitterOnHover} alt="Center Image" />
          </a>
        </div>
      </div>
    </div>
  );
}
