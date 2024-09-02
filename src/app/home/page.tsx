"use client";

import { HiSpeakerWave } from "react-icons/hi2";
import { GoArrowSwitch } from "react-icons/go";
import { IoCopy } from "react-icons/io5";
import { IoMdDoneAll } from "react-icons/io";
import languageArray from "../../lib/language";
import translate from "../../lib/translate";
import { speak } from "../../lib/translate";
import { useState, useEffect } from "react";

const Home = () => {
  const [langAB, setLangAB] = useState({ A: "en-GB", B: "es-ES" });
  const [translation, setTranslation] = useState("");
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);

  function switchValue() {
    const selectA = document.getElementById("selectA") as HTMLSelectElement;
    const selectB = document.getElementById("selectB") as HTMLSelectElement;

    [selectA.value, selectB.value] = [selectB.value, selectA.value];
    setLangAB({ A: langAB.B, B: langAB.A });
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
      }
    );
  }
  useEffect(() => {
    if (input) {
      setTranslation("Translating...");
      translate(langAB.A, langAB.B, input, setTranslation);
    }
  }, [input, langAB]);

  return (
    <main className="flex min-h-screen bg-slate-100 dark:bg-gray-900 justify-center items-center py-20">
      <div className="flex md:flex-row flex-col gap-8 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded">
        <div className="flex flex-col gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded">
          <textarea
            className="md:w-[40vw] w-[70vw] h-[200px] rounded resize-none p-2 text-[1.2em] font-mono"
            maxLength={5000}
            id="input"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex justify-between px-5 gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 rounded w-full py-2">
            <span className="bg-gray-200 dark:bg-gray-800 rounded-full p-3">
              <HiSpeakerWave
                className="text-[1.2em] fill-black dark:fill-white cursor-pointer"
                onClick={() => speak(input, langAB.A)}
              />
            </span>
            <select
              id="selectA"
              onChange={(e) => setLangAB({ ...langAB, A: e.target.value })}
              className="bg-gray-200 dark:bg-gray-800 rounded p-3 outline-none focus:outline-none focus:border-none cursor-pointer font-mono"
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
          className="text-[2.4em] fill-black dark:fill- rotate-90 md:rotate-0 mx-auto my-[-10px] md:my-auto cursor-pointer"
          onClick={switchValue}
        />
        <div className="flex flex-col gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 shadow-lg rounded">
          <div className="md:w-[40vw] w-[70vw] h-[200px] flex justify-end items-end relative p-4">
            <textarea
              className="md:w-[40vw] w-[70vw] h-[200px] absolute top-0 left-0 bottom-0 right-0 rounded resize-none p-2 text-[1.2em] font-mono"
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
          <div className="flex justify-between px-5 gap-4 h-fit w-fit p-3 bg-slate-100 dark:bg-gray-900 rounded w-full py-2">
            <span className="bg-gray-200 dark:bg-gray-800 rounded-full p-3">
              <HiSpeakerWave
                className="text-[1.2em] fill-black dark:fill-white cursor-pointer"
                onClick={() => speak(translation, langAB.B)}
              />
            </span>
            <select
              id="selectB"
              onChange={(e) => setLangAB({ ...langAB, B: e.target.value })}
              className="bg-gray-200 dark:bg-gray-800 rounded p-3 outline-none focus:outline-none focus:border-none cursor-pointer font-mono"
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
      </div>
    </main>
  );
};

export default Home;
