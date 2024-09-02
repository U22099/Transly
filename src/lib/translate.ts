"use client";

async function translate(
  langA: string,
  langB: string,
  input: string,
  setTranslation: (arg0: string) => void
) {
  const url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${langA}|${langB}&de=nifemiolaniyi4@gmail.com`;
  const response = await fetch(url, {
    cache: "no-store",
  });
  const res = await response.json();
  const result = res.responseData.translatedText;
  if (result) {
    setTranslation(result);
    if(result?.toLowerCase() === input.toLowerCase()){
      setTranslation(res.matches[0].translated || result);
    }
    if(res.responseStatus === 403){
   setTranslation("Invalid language input");
  } 
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
    console.log(e);
    setError("Voice feature not supported in your device")
    setTimeout(() => {
    setError("Voice feature not supported in your device")
    }, 3000);
  }
}

export default translate;
