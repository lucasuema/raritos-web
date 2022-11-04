import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const BlogPage = () => {
  const router = useRouter();

  return (
    <Layout title="4 observations">
      <div className="flex flex-col w-screen items-start">
        <button
          className=" bg-slate-400 p-2 mt-10 ml-10 max-w-md rounded-md shadow-[2px_2px_0_rgba(0,0,0,1)] hover:shadow-none "
          onClick={() => {
            router.push('/content');
          }}
        >
          Back
        </button>
        <div className=" flex flex-col flex-1 justify-start items-start text-start px-10 pt-10 gap-y-4">
          <div className="lg:max-w-3xl text-lg font-bold">
            4 Observations I made attending events in the metaverse.
          </div>
          <div className="lg:max-w-3xl">
            If you are courious about events in the metaverse and are thinking about throwing some
            of your own here are 4 observations that might give you some practical insights.
          </div>
          <div className="lg:max-w-3xl">
            1️⃣ It&apos;s key to understand where your community hangs out.
          </div>
          <ul className="list-disc  pl-10 lg:max-w-3xl">
            <li>
              If you or the project you want to throw an event for already has a community it is key
              that you find out if this community already spends time on an existing metaverse.
            </li>
            <li>
              Metaverses tend to have orientations, The Sandbox might have a more gaming oriented
              community while Decentraland might possess a more art or fashion oriented type of
              community.
            </li>
            <li>
              Throwing events on worlds that your audience is already familiared with will increase
              your chances of success by:
              <ol className="list-decimal  pl-10 lg:max-w-3xl">
                <li>
                  Lowering the UX barrier to entry. Your audience will already know how to access
                  the event and use the platform.
                </li>
                <li>
                  Increasing your chances of discoverability. If the type of user you want to
                  attract already spends time in this world then chances are that other community
                  members of that world might enjoy your event too!
                </li>
                <li>
                  Increasing your chances of getting support from the world you are throwing you
                  event at. If your event brings value and engages the citizens of that metaverse
                  then it is in the interest of the project creators to help you improve your event.
                </li>
              </ol>
            </li>
          </ul>
          {/* <div className=" hidden md:block pl-10 my-4 lg:max-w-3xl">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vwYY8gZg4rY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          {/* <div className="block md:hidden pl-10 my-4 lg:max-w-3xl">
            <iframe
              width="360"
              height="215"
              src="https://www.youtube.com/embed/vwYY8gZg4rY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}
          <div className="lg:max-w-3xl">
            2️⃣ Event&apos;s are hosted on the organizer&apos;s own space or on the experience of a
            partner.
          </div>
          <ul className="list-disc pl-10 lg:max-w-3xl">
            <li>
              Like in real life, events in metaverses take place on a space, this space is tipically
              a game-like virtual experience that is tailored to the purpose of the event. In the
              case of concerts for example, the venues tend to have a stage with everything a real
              life stage would have, from lights to speakers to screens!
            </li>
            <li>
              In most cases these venues or virtual spaces are designed and built by the
              organizations or individuals that throw the events, but in some cases event organizers
              can lean on partners that have already developed experiences that could be suitable
              for the purpose of the event!
            </li>
          </ul>
          <div className="lg:max-w-3xl">3️⃣ Attendees want to learn and network.</div>
          <ul className="list-disc pl-10 lg:max-w-3xl">
            <li>
              Other events might be centered more around learning and networking. For these types of
              events it seems important to find guest speakers that will be interesting for your
              audience.
            </li>
            <li>
              Just like in real life, giving your audience the oportunity to network with guest
              speakers will go a long way!
            </li>
          </ul>
          <div className="lg:max-w-3xl ">
            4️⃣ It&apos;s appreciated if virtual merchadise is distributed to attendees!
          </div>
          <ul className="list-disc pl-10 lg:max-w-3xl mb-36">
            <li>
              It is standard on these events to distribute POAPs which stand for Proof of Attendance
              Protocol so that your audince can remember their participation in the event.
            </li>
            <li>
              Distributing POAPs is specially interesting also because they create a record on the
              blockchain of all the people who attended your event, which will help you later down
              the road if you need to distribute rewards or token gate access to experiences only
              for the active members of your community
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
