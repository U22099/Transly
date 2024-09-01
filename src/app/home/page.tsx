"use client";

import {HiSpeakerWave} from 'react-icons/hi2';

const Home = () => {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-gray-900 justify-center items-center py-20">
      <div className="flex md:flex-row flex-col gap-8 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded">
        <div className="flex flex-col gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded">
          <textarea className="md:w-[40vw] w-[70vw] h-[200px] rounded resize-none p-2 text-[1.2em] font-mono" maxLength="5000" id="input" />
          <div className="flex justify-between px-5 gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded w-full py-2">
            <HiSpeakerWave className="bg-gray-200 dark:bg-gray-800 rounded-full p-4 fill-black dark:fill-white"/>
            <select id="selectA">
              <option value="en-GB">English</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded">
          <textarea className="md:w-[40vw] w-[70vw] h-[200px] rounded resize-none p-2 text-[1.2em] font-mono" id="output" />
          <div className="flex justify-between px-5 gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded w-full py-2">
            <HiSpeakerWave />
            <select id="selectB">
              <option value="">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
