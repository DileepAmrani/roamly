import React, { useState, useEffect, useRef } from 'react';
import ArrowDown from "../assets/arrow-down.svg";
import ArrowDownWhite from "../assets/arrow-down-white.svg";
import DiceIcon from "../assets/dice-icon.svg";
import { AbstractData, ConcreteData } from "../data";
import { Emotion, Ethics, Philosophy, Asthetic, Temporal, Group, Cognitive, Furniture, Household, Electronics, Office, Outdoor, Accessories, Tools, Transportation, Media, Miscellaneous } from "./../assets/icons"
const ConcreteBox = ({ selectedConcrete, setSelectedConcrete, selectedAbstract, setSelectedAbstract, handleSubmit, onShuffle }) => {
    const [isConcreteOpen, setIsConcreteOpen] = useState(false);
    const [isAbstractOpen, setIsAbstractOpen] = useState(false);

    const concreteRef = useRef(null);
    const abstractRef = useRef(null);

    const closeDropdowns = () => {
        setIsConcreteOpen(false);
        setIsAbstractOpen(false);
    };

    const handleDocumentClick = (event) => {
        if (
            concreteRef.current &&
            !concreteRef.current.contains(event.target) &&
            abstractRef.current &&
            !abstractRef.current.contains(event.target)
        ) {
            closeDropdowns();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, []);

    const handleConcreteClick = () => {
        closeDropdowns();
        setIsConcreteOpen(!isConcreteOpen);
    };

    const handleConcreteItemClick = (item) => {
        setSelectedConcrete(item);
        setIsConcreteOpen(false);
    };

    const handleAbstractClick = () => {
        closeDropdowns();
        setIsAbstractOpen(!isAbstractOpen);
    };

    const handleAbstractItemClick = (item) => {
        setSelectedAbstract(item);
        setIsAbstractOpen(false);
    };

    const shuffleSelections = () => {
        const randomConcrete = ConcreteData[Math.floor(Math.random() * ConcreteData.length)].title;
        const randomAbstract = AbstractData[Math.floor(Math.random() * AbstractData.length)].title;
        setSelectedConcrete(randomConcrete);
        setSelectedAbstract(randomAbstract);
        if (onShuffle) {
            onShuffle();
        }
    };

    const getIcon = (name) => {
        switch (name) {
            case 'emotion':
                return <Emotion />;
            case 'ethics':
                return <Ethics />;
            case 'philosophy':
                return <Philosophy />;
            case 'group':
                return <Group />;
            case 'temporal':
                return <Temporal />;
            case 'asthetic':
                return <Asthetic />;
            case 'cognitive':
                return <Cognitive />;
            case 'furniture':
                return <Furniture />;
            case 'household':
                return <Household />;
            case 'electronics':
                return <Electronics />;
            case 'office':
                return <Office />;
            case 'outdoor':
                return <Outdoor />;
            case 'accessories':
                return <Accessories />;
            case 'tools':
                return <Tools />;
            case 'transportation':
                return <Transportation />;
            case 'media':
                return <Media />;
            case 'miscellaneous':
                return <Miscellaneous />;
            default:
                return <Emotion />;
        }
    };

    return (
        <div className='border border-gray_900 bg-white rounded-2xl p-4 max-w-[400px] w-full h-fit'>
            <h4 className='text-base text-black f-anvenirnext-m mb-4'>Concrete</h4>

            <div className='relative w-full' ref={concreteRef}>
                <button className='border-2 border-border_yellow bg-yellow_900 rounded-[10px] w-full h-[58px] py-[10px] px-4 flex items-center justify-between mb-7' onClick={handleConcreteClick}>
                    <span className='text-deep_gray f-dmmono-m text-base'>{selectedConcrete}</span>
                    <img src={ArrowDown} alt="Arrow Down" className={`${isConcreteOpen ? " rotate-180" : ""}`} />
                </button>

                {isConcreteOpen && (
                    <ul className='flex flex-col gap-1 z-40 bg-white border border-gray_900 rounded-[10px] absolute top-16 left-0 w-full max-h-[280px] overflow-auto'>
                        {ConcreteData.map((v, i) => {
                            return <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer flex gap-2 p-4 hover:bg-purple_700 hover:bg-opacity-20' onClick={() => handleConcreteItemClick(v.title)}>{getIcon(v.icon)}{v.title}</li>
                        })}
                    </ul>
                )}
            </div>

            <h4 className='text-base text-black f-anvenirnext-m mb-4'>Abstract</h4>

            <div className='relative w-full' ref={abstractRef}>
                <button className='border-2 border-border-purple bg-purple_700 rounded-[10px] w-full h-[58px] py-[10px] px-4 flex items-center justify-between mb-7' onClick={handleAbstractClick}>
                    <span className='text-white f-dmmono-m text-base'>{selectedAbstract}</span>
                    <img src={ArrowDownWhite} alt="Arrow Down" className={`${isAbstractOpen ? " rotate-180" : ""}`} />
                </button>

                {isAbstractOpen && (
                    <ul className='flex flex-col gap-1 z-40 bg-white border border-gray_900 rounded-[10px] absolute top-16 left-0 w-full max-h-[280px] overflow-auto'>
                        {AbstractData.map((v, i) => {
                            return <li className='text-sm text-deep_gray f-dmmono-m cursor-pointer flex gap-2 p-4 hover:bg-purple_700 hover:bg-opacity-20' onClick={() => handleAbstractItemClick(v.title)}>{getIcon(v.icon)}{v.title}</li>
                        })}
                    </ul>
                )}
            </div>

            <div className='flex justify-between gap-2 items-center'>
                <button className='bg-black-700 rounded-[10px] w-full h-10 flex-1 px-4 flex items-center justify-center text-white text-base f-anvenirnext-m text-center' onClick={() => handleSubmit()}>Regenerate</button>
                <button className='bg-black_800 border-[.75px] border-white rounded-[10px] h-10 w-10 flex items-center justify-center' onClick={shuffleSelections}>
                    <img src={DiceIcon} alt="Arrow Circle Right" />
                </button>
            </div>
        </div>
    )
}

export default ConcreteBox