import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const BeweePage = () => {
  const router = useRouter();

  return (
    <Layout title="Ecoterreans">
      <div className="flex flex-col w-screen overflow-hidden items-start">
        <button
          className=" bg-slate-400 p-2 mt-10 ml-10 max-w-md rounded-md shadow-[2px_2px_0_rgba(0,0,0,1)] hover:shadow-none "
          onClick={() => {
            router.push('/');
          }}
        >
          Back
        </button>
        <div className=" flex flex-col flex-1 justify-start items-start text-start px-10 pt-10 gap-y-4">
          <div className="lg:max-w-3xl text-lg font-bold">Bewee.me:</div>
          <div className="md:max-w-lg">
            Bewee is the Pokemon Go and Geocaching for POAPs 🌏 Drop POAPs and collect them IRL with
            your friends!
          </div>
          <div className="md:max-w-lg">
            ✨ Bewee turns the physical world into an adventure game that makes people happier and
            healthier.
          </div>
          <div className="md:max-w-lg">
            👋 It is an inherently viral experience. POAP issuers use it to engage their communities
            and collectors bring their friends along to collect!
          </div>
          <div className="md:max-w-lg pt-10">Play the game! ⬇️</div>
          <div className="md:max-w-lg ">
            <a href="https://bewee.me/" target="_blank" rel="noreferrer">
              <div className="flex bg-green-400 p-2 mb-2 rounded-md shadow-[2px_2px_0_rgba(0,0,0,1)] hover:shadow-none">
                Bewee.me
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BeweePage;
