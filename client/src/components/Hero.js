import React, { useState, useEffect } from "react";
import ConcreteBox from "./ConcreteBox";
import axios from "axios";
import { AbstractData, ConcreteData } from "../data";

const Hero = () => {
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState("");
  const [randomConcrete, setRandomConcrete] = useState("");
  const [randomAbstract, setRandomAbstract] = useState("");
  const [selectedConcrete, setSelectedConcrete] = useState("Electronics");
  const [selectedAbstract, setSelectedAbstract] = useState("Emotions and Feelings");



  const HTTP = "https://roamly-ten.vercel.app/chat";

  const handleSubmit = () => {
    setLoader(true)
    const filteredData = ConcreteData.find(
      (data) => data.title === selectedConcrete
    );
    const randomWordIndex = Math.floor(
      Math.random() * filteredData.words.length
    );
    let randomWord = filteredData.words[randomWordIndex];
    const filteredData1 = AbstractData.find(
      (data) => data.title === selectedAbstract
    );
    const randomWordIndex1 = Math.floor(
      Math.random() * filteredData1.words.length
    );
    let randomWord1 = filteredData1.words[randomWordIndex1];
    console.log(randomWord, randomWord1);
    setRandomAbstract(randomWord1);
    setRandomConcrete(randomWord);
    const newPrompt = `Generate a surprising, imaginative, light-hearted, and contradicting prompt that encourages lateral, playful, and imaginative thinking using the provided abstract and concrete concepts dataset. 
    Make sure to must must include the following exact words without changing them: 
    word concrete = ${randomWord}, 
    word abstract = ${randomWord1}. 
    `;
    axios
      .post(`${HTTP}`, { prompt: newPrompt })
      .then((res) => {
        setResponse(res.data.content.toLowerCase());
        console.log(res);
        setLoader(false)

      })
      .catch((error) => {
        console.log(error);
        setLoader(false)

      });

  };

  useEffect(() => {
    handleSubmit()
  }, []);

  const renderWords = (a) => {
    const concreteReplacement = `<span class="bg-[#E1FF22] inline-block text-white rounded-[20px] px-[10px] py-[2px] f-dmmono-r leading-[65px]">${randomConcrete.toLowerCase()}</span>`;
    const abstractReplacement = `<span class="bg-[#a236d4] inline-block text-white rounded-[20px] px-[10px] py-[2px] f-dmmono-r leading-[65px]">${randomAbstract.toLowerCase()}</span>`;

    const text = a.replace(new RegExp(randomConcrete.toLowerCase(), 'g'), concreteReplacement).replace(new RegExp(randomAbstract.toLowerCase(), 'g'), abstractReplacement);
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <section className="pt-14 md:pt-[120px] mb-40 md:mb-[378px] w-full px-4">
      <div className="max-w-[1300px] w-full mx-auto flex flex-col lmd:flex-row gap-10 md:gap-20">
        <div className="w-full lmd:w-[60%]">
          {loader ?
            <div role="status" className="w-full space-y-8 animate-pulse">
              <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2"></div>
              <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            :
            <h1 className="text-black_900 text-center xmd:text-start f-anvenirnext-m text-5xl xsm:text-[65px] leading-[72px] xsm:leading-[80px] flex gap-2 flex-wrap">
              <div
                className="text-black_900 text-center xmd:text-start f-anvenirnext-m text-5xl xsm:text-[65px] leading-[72px] xsm:leading-[80px] flex gap-2 flex-wrap"
                dangerouslySetInnerHTML={{ __html: response ? renderWords(response, randomAbstract, randomConcrete) : "" }}
              />
            </h1>}
        </div>
        <div className="flex-1 w-full lmd:w-[40%] flex justify-center lmd:justify-end">
          <ConcreteBox
            selectedConcrete={selectedConcrete}
            setSelectedConcrete={setSelectedConcrete}
            selectedAbstract={selectedAbstract}
            setSelectedAbstract={setSelectedAbstract}
            handleSubmit={handleSubmit}
            onShuffle={handleSubmit}
             />
        </div>
      </div>
    </section>
  );
};

export default Hero;
