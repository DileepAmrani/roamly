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
    setLoader(true);
    const filteredConcreteData = ConcreteData.find(
      (data) => data.title === selectedConcrete
    );
    const randomConcreteWordIndex = Math.floor(
      Math.random() * filteredConcreteData.words.length
    );
    let randomConcreteWord = filteredConcreteData.words[randomConcreteWordIndex];

    const filteredAbstractData = AbstractData.find(
      (data) => data.title === selectedAbstract
    );
    const randomAbstractWordIndex = Math.floor(
      Math.random() * filteredAbstractData.words.length
    );
    let randomAbstractWord = filteredAbstractData.words[randomAbstractWordIndex];

    console.log(randomConcreteWord, randomAbstractWord);

    setRandomAbstract(randomAbstractWord);
    setRandomConcrete(randomConcreteWord);

    const newPrompt = `Generate a surprising, imaginative, light-hearted, and contradicting prompt that encourages lateral, playful, and imaginative thinking using the provided abstract and concrete concepts dataset. 
    Make sure to must must include the following exact words without changing them: 
    word concrete = ${randomConcreteWord}, 
    word abstract = ${randomAbstractWord}.
    it should be just a simple sentence. maximuim 150 characters
    `;

    axios
      .post(`${HTTP}`, { prompt: newPrompt })
      .then((res) => {
        const content = res.data.content.toLowerCase();
        if (content.includes(randomConcreteWord.toLowerCase()) && content.includes(randomAbstractWord.toLowerCase())) {
          setResponse(content);
          setLoader(false);
        } else {
          handleSubmit(); // Recursively call handleSubmit if words are not present in response
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  const renderWords = (a) => {
    const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const concretePattern = new RegExp(`(${escapeRegex(randomConcrete.toLowerCase())}[^\\s]*)`, 'g');
    const abstractPattern = new RegExp(`(${escapeRegex(randomAbstract.toLowerCase())}[^\\s]*)`, 'g');

    const concreteReplacement = `<span class="bg-yellow_900 inline-block text-black rounded-[12px] md:rounded-[20px] px-[10px] py-[10px] md:py-[2px] f-dmmono-r text-4xl leading-[40px] md:text-[80px] md:leading-[80px] my-[6px] md:my-1 mr-1">$1</span>`;
    const abstractReplacement = `<span class="bg-purple_700 inline-block text-white rounded-[12px] md:rounded-[20px] px-[10px] py-[10px] md:py-[2px] f-dmmono-r text-4xl leading-[40px] md:text-[80px] md:leading-[80px] my-[6px] md:my-1">$1</span>`;

    const text = a
      .replace(concretePattern, concreteReplacement)
      .replace(abstractPattern, abstractReplacement);

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <section className="pt-14 md:pt-[120px] mb-40 md:mb-[378px] w-full px-4">
      <div className="max-w-[1300px] w-full mx-auto flex flex-col lmd:flex-row gap-10 md:gap-20">
        <div className="w-full lmd:w-[60%]">
          {loader ? (
            <div role="status" className="w-full space-y-4 md:space-x-8 animate-pulse">
              <div className="h-6 md:h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-1 md:mb-2"></div>
              <div className="h-6 md:h-10 bg-gray-200 rounded-full dark:bg-gray-700 mb-1 md:mb-2"></div>
              <div className="h-6 md:h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-1 md:mb-2"></div>
              <div className="h-6 md:h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-1 md:mb-2"></div>
              <div className="h-6 md:h-10 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
          ) : (
            <h1 className="text-black_900 text-center xmd:text-start f-anvenirnext-m text-4xl leading-[40px] md:text-[80px] md:leading-[80px] flex gap-2 flex-wrap">
              <div
                dangerouslySetInnerHTML={{ __html: response ? renderWords(response) : "" }}
              />
            </h1>
          )}
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
