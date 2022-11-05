import React from 'react';
import Layout from '../components/Layout';
import Header from 'src/components/Header';
import Image from 'next/image';
import one from '../../public/one.png';
import two from '../../public/two.png';
import three from '../../public/three.png';
import four from '../../public/four.png';
import five from '../../public/five.png';
import six from '../../public/six.png';
import seven from '../../public/seven.png';
import eight from '../../public/eight.png';
import nine from '../../public/nine.png';
import ten from '../../public/ten.png';
import mintHeaderDesktop from '../../public/header-mint-desktop.gif';

const Hero = () => {
  return (
    <div className="flex flex-col h-screen   bg-black ">
      <div className=" flex flex-col flex-1 justify-center items-center text-center overflow-clip">
        <div className="hidden flex-row gap-4 px-4 sm:flex max-w-[1100px]">
          <Image src={one} alt="Center Image" />
          <Image src={two} alt="Center Image" />
          <Image src={three} alt="Center Image" />
          <Image src={four} alt="Center Image" />
          <Image src={five} alt="Center Image" />
        </div>
        <div className="flex flex-row gap-4 sm:hidden">
          <Image src={one} alt="Center Image" />
          <Image src={two} alt="Center Image" />
          <Image src={three} alt="Center Image" />
        </div>

        <div className="px-10 pt-10 text-white md:max-w-[700px] text-[25px] font-primary">
          How How many times people called you a weirdo? They don’t know they are raritos too. We
          are special, we are unique. 7471 randomly generated with the same DNA. Minting a Rarito is
          a celebration of your inner weirdness.
        </div>
        <div className="text-lg mt-8 text-white w-[180px] h-[50px] flex items-center justify-center text-center">
          <Image src={mintHeaderDesktop} alt="Center Image" />
          <div className="absolute font-primary ">Connect wallet</div>
        </div>
        <div className="flex w-64 justify-center gap-5 pt-10"></div>
        <div className=" font-primary ">Mint @ ETH 0.0045</div>
      </div>
    </div>
  );
};

export default Hero;
