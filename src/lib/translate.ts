"use client";

async function translate(
  langA: string,
  langB: string,
  input: string,
  setTranslation: (arg0: string) => void
) {
  const url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${langA}|${langB}`;
  const response = await fetch(url, {
    cache: "no-store",
  });
  const res = await response.json();
  console.log(res);
  const result = res.responseData.translatedText;
  if (result) {
    setTranslation(result);
  } else {
    setTranslation("No translation found");
  }
}

export function speak(text: string, lang: string, setError: (arg0: string) => void) {
  try{
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = lang;
    const speech = window.speechSynthesis || speechSynthesis;
    speech.speak(utterance);
  } catch(e) {
    console.log(e)
    setError("Voice feature not supported in your device")
  }
}

export default translate;
