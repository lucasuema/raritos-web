import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Link from 'next/link';

const ConsultancyPage = () => {
  const router = useRouter();

  return (
    <Layout title="Ecoterreans">
      <div className="flex flex-col w-screen overflow-clip items-start">
        <button
          className=" bg-slate-400 p-2 mt-10 ml-10 max-w-md rounded-md shadow-[2px_2px_0_rgba(0,0,0,1)] hover:shadow-none "
          onClick={() => {
            router.push('/');
          }}
        >
          Back
        </button>
        <div className=" flex flex-col flex-1 justify-start items-start text-start px-10 pt-10 gap-y-4">
          <div className="lg:max-w-3xl text-lg font-bold">Blog:</div>
          <Link href="/blog/4-observations-I-made-attending-events-in-the-metaverse">
            <a>
              <div className="md:max-w-lg underline underline-offset-1 text-blue-500">
                4 observations I made attending events in the metaverse.
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ConsultancyPage;
