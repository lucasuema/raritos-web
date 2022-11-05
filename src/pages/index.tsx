import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const IndexPage = () => {
  const router = useRouter();

  return (
    <Layout title="The Raritos">
      <div className="flex flex-col h-screen w-screen bg-black ">
        <div className=" flex flex-col flex-1 justify-center items-center text-center overflow-clip">
          <h1 className="text-5xl text-white font-bold ">The raritos 👹</h1>
          <div className="px-10 pt-10 text-white md:max-w-lg">7471 PFPs coming soon...👀</div>
          <div className="flex w-64 justify-center gap-5 pt-10">
            {/* <button
              className=" bg-green-400 p-2  w-32 rounded-md shadow-[2px_2px_0_rgba(0,0,0,1)] hover:shadow-none "
              onClick={() => {
                router.push('/bewee');
              }}
            >
              Experiments
            </button>

            <button
              className=" bg-green-400 p-2 w-32 rounded-md shadow-[2px_2px_0_rgba(0,0,0,1)] hover:shadow-none "
              onClick={() => {
                router.push('/content');
              }}
            >
              Content
            </button> */}
          </div>
          {/* <div className="pt-10 md:max-w-lg">📬 lucas@bewee.me</div> */}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
