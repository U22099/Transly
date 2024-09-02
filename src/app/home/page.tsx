"use client";

import { HiSpeakerWave } from "react-icons/hi2";
import { GoArrowSwitch } from "react-icons/go";
import { IoCopy } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import languageArray from "../../lib/language";
import translate from "../../lib/translate";
import { speak } from "../../lib/translate";
import { useState, useEffect } from "react";

const Home = () => {
  const [langAB, setLangAB] = useState({ A: "en-GB", B: "es-ES" });
  const [translation, setTranslation] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function switchValue() {
    const selectA = document.getElementById("selectA") as HTMLSelectElement;
    const selectB = document.getElementById("selectB") as HTMLSelectElement;
    const input = document.getElementById("input") as HTMLTextAreaElement;

    [selectA.value, selectB.value] = [selectB.value, selectA.value];
    setLangAB({ A: langAB.B, B: langAB.A });
    input.value = "";
    setInput("");
    setTranslation("");
  }
  function copyToClipBoard() {
    const output = document.getElementById("output") as HTMLTextAreaElement;
    navigator.clipboard.writeText(output.value).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      },
      (err) => {
        setCopied(false);
        console.log(err)
      }
    );
  }
  async function trans(){
    await translate(langAB.A, langAB.B, input, setTranslation);
    const output = document.getElementById("output") as HTMLTextAreaElement;
    output.scrollIntoView({behavior: 'smooth'})
  }
  useEffect(() => {
    if (input) {
      setTranslation("Translating...");
      translate(langAB.A, langAB.B, input, setTranslation);
    }
  }, [input, langAB]);

  return (
    <main
     className="flex flex-col w-screen min-h-screen bg-slate-100 dark:bg-gray-900 justify-center items-center py-10">
      <h1 className="font-mono font-bold text-[2em] md:text-[3em] mb-3 mt-5 rounded bg-gray-200 p-4 dark:bg-gray-800 text-black dark:text-white">
        Transly
      </h1>
      <div 
      className="flex md:flex-row flex-col gap-4 md:gap-8 md:bg-slate-100 md:dark:bg-gray-900 md:shadow-lg rounded">
        <div className="flex flex-col gap-4 md:p-3 bg-slate-100 dark:bg-gray-900 md:shadow-lg rounded">
        <div className="md:w-[40vw] w-[70vw] h-[200px] flex justify-end items-end relative mx-auto p-2 md:p-4">
        <textarea
            className="md:w-[40vw] w-[70vw] h-[200px] absolute top-0 left-0 bottom-0 right-0 rounded resize-none p-2 text-[1.2em] font-mono mx-auto"
            maxLength={5000}
            id="input"
            onChange={(e) => setInput(e.target.value)}
          />
              <FaArrowDown
                className="z-10 text-[1.5em] md:text-[2em] cursor-pointer"
                onClick={async ()=> await trans()}
              />
          </div>
          <div className="flex justify-between px-2 md:px-5 gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 rounded w-full py-2">
            <span className="bg-gray-200 dark:bg-gray-800 rounded-full p-3">
              <HiSpeakerWave
                className="text-[1.2em] fill-black dark:fill-white cursor-pointer"
                onClick={() => speak(input, langAB.A, setError)}
              />
            </span>
            <select
              id="selectA"
              onChange={(e) => setLangAB({ ...langAB, A: e.target.value })}
              className="bg-gray-200 dark:bg-gray-800 rounded p-3 outline-none focus:outline-none focus:border-none cursor-pointer font-mono max-w-[40vw] md:max-w-[20vw] text-black dark:text-white"
              defaultValue="en-GB"
            >
              {languageArray.map((lang, index) => {
                return (
                  <option value={lang[0]} key={index}>
                    {lang[1]}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <GoArrowSwitch
          className="text-[2.4em] fill-black dark:fill- rotate-90 md:rotate-0 mx-auto my-[-10px] md:my-auto cursor-pointer fill-black dark:fill-white"
          onClick={switchValue}
        />
        <div className="flex flex-col gap-4 bg-slate-100 dark:bg-gray-900 md:shadow-lg rounded">
          <div className="md:w-[40vw] w-[70vw] h-[200px] flex justify-end items-end relative mx-auto p-2 md:p-4">
            <textarea
              className="md:w-[40vw] w-[70vw] h-[200px] absolute top-0 left-0 bottom-0 right-0 rounded resize-none p-2 text-[1.2em] font-mono mx-auto"
              id="output"
              value={translation}
              readOnly
            />
            {!copied ? (
              <IoCopy
                className="z-10 text-[1.5em] md:text-[2em] cursor-pointer"
                onClick={copyToClipBoard}
              />
            ) : (
              <IoMdDoneAll className="z-10 text-[1.5em] md:text-[2em] cursor-pointer" />
            )}
          </div>
          <div className="flex justify-between px-2 md:px-5 gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 rounded w-full py-2">
            <span className="bg-gray-200 dark:bg-gray-800 rounded-full p-3">
              <HiSpeakerWave
                className="text-[1.2em] fill-black dark:fill-white cursor-pointer"
                onClick={() => speak(translation, langAB.B, setError)}
              />
            </span>
            <select
              id="selectB"
              onChange={(e) => setLangAB({ ...langAB, B: e.target.value })}
              className="bg-gray-200 dark:bg-gray-800 rounded p-3 outline-none focus:outline-none focus:border-none cursor-pointer font-mono text-black dark:text-white max-w-[40vw] md:max-w-[20vw]"
              defaultValue="es-Es"
            >
              {languageArray.map((lang, index) => {
                return (
                  <option value={lang[0]} key={index}>
                    {lang[1]}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {error&&<p className="text-red-600 font-mono mt-2">{error}</p>}
      </div>
    </main>
  );
};

export default Home;