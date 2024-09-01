"use client";
import axios from "axios";

async function translate(
  langA: string,
  langB: string,
  input: string,
  setTranslation: (arg0: string) => void
) {
  const url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${langA}|${langB}`;
  const response = await axios.get(url);
  const result = response.data.responseData.translatedText;
  if (!(result?.toLowerCase() === input.toLowerCase())) {
    setTranslation(result);
  } else {
    const result2 = response.data.matches.filter(
      (x: { [index: string]: string }) =>
        x.translation.toLowerCase() !== input.toLowerCase()
    )[0];
    if (result2) {
      setTranslation(result2);
    } else {
      setTranslation("No translation found");
    }
  }
}

export function speak(text: string, lang: string) {
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.lang = lang;
  const speech = window.speechSynthesis || speechSynthesis;
  speech.speak(utterance);
}

export default translate;
