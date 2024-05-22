import React from 'react'
import Lateralthinking from "../assets/lateral-thinking.svg"
import Creativity from "../assets/Creativity.svg"
import Community from "../assets/Community.png"

const Works = () => {
    return (
        <div className='w-full mt-40 md:mt-64'>
            <div className='w-full mx-w-[1300px] mx-auto'>
                <h3 className='f-dmmono-m text-dark_gray text-[32px] text-center mb-14'>How Roamly Works</h3>
                
                <div className='flex gap-10 flex-col lmd:flex-row mb-[100px]'>
                    <div className='w-full lmd:w-[40%] px-4 flex flex-col lmd:justify-center'>
                        <div className='lmd:max-w-[420px] mx-auto w-full'>
                            <h4 className='text-dark_gray text-xl f-dmmono-m mb-8'>Lateral thinking</h4>
                            <h1 className='text-purple text-4xl md:text-5xl md:leading-[60px] f-anvenirnext-m mb-10 md:mb-14'>Stimulate your imagination</h1>
                            <p className='text-black text-xl md:text-2xl f-anvenirnext-m'>Roamly's AI-powered prompts will inspire you to think outside the box and make surprising connections.</p>
                        </div>
                    </div>

                    <div className='bg-[#F2FFD0] lmd:w-[60%] h-auto rounded-tl-[20px] rounded-tr-[20px] lmd:rounded-tr-[0px] rounded-bl-[0px] lmd:rounded-bl-[20px] overflow-hidden flex justify-center items-center lmd:p-20 p-10'>
                        <img src={Lateralthinking} alt="Lateral thinking" loading='lazy' />
                    </div>
                </div>

                <div className='flex gap-10 flex-col lmd:flex-row-reverse mb-[100px]'>
                    <div className='w-full lmd:w-[40%] px-4  flex flex-col lmd:justify-center'>
                        <div className='lmd:max-w-[420px] mx-auto w-full'>
                            <h4 className='text-dark_gray text-xl f-dmmono-m mb-8'>Creativity</h4>
                            <h1 className='text-purple text-4xl md:text-5xl md:leading-[60px] f-anvenirnext-m mb-10 md:mb-14'>Playfully express your creativity</h1>
                            <p className='text-black text-xl md:text-2xl f-anvenirnext-m'>Respond to prompts through drawing, writing, or photography, and unleash your creativity.</p>
                        </div>
                    </div>

                    <div className='bg-[#DCF0EE] lmd:w-[60%] h-auto rounded-tr-[20px] rounded-tl-[20px] lmd:rounded-tl-[0px] rounded-br-[0px] lmd:rounded-br-[20px] overflow-hidden flex justify-center items-center lmd:p-20 p-10'>
                        <img src={Creativity} alt="Lateral thinking" loading='lazy' />
                    </div>
                </div>
                
                <div className='flex gap-10 flex-col lmd:flex-row'>
                    <div className='w-full lmd:w-[40%] px-4 flex flex-col lmd:justify-center'>
                        <div className='lmd:max-w-[420px] mx-auto w-full'>
                            <h4 className='text-dark_gray text-xl f-dmmono-m mb-8'>Community</h4>
                            <h1 className='text-purple text-4xl md:text-5xl md:leading-[60px] f-anvenirnext-m mb-10 md:mb-14'>Connect with a vibrant community</h1>
                            <p className='text-black text-xl md:text-2xl f-anvenirnext-m'>Share your creations, collaborate with like-minded individuals, widen your perspective, and find inspiration in our community.</p>
                        </div>
                    </div>

                    <div className='bg-[#EADFFF] lmd:w-[60%] h-auto rounded-tl-[20px] rounded-tr-[20px] lmd:rounded-tr-[0px] rounded-bl-[0px] lmd:rounded-bl-[20px] overflow-hidden flex justify-center items-center lmd:px-20 px-10 p-10'>
                        <img src={Community} alt="" loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works