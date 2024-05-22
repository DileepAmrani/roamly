import React from 'react'
import Community1 from "../assets/community-1.png"
import Community2 from "../assets/community-2.png"
import Community3 from "../assets/community-3.png"
import Avatars1 from "../assets/avatars-1.svg"
import Avatars2 from "../assets/avatars-2.svg"
import Image1 from "../assets/Community-1.svg"
import Image2 from "../assets/Community-2.svg"
import { MdOutlineFavoriteBorder, MdOutlineModeComment, MdOutlineArrowOutward } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";

const Community = () => {
    return (
        <section className='w-full px-4'>
            <div className='w-full max-w-[1300px] mx-auto'>
                <h3 className='text-dark_gray f-dmmono-m text-[32px] text-center mb-14'>Community</h3>
                <h1 className='text-gray_900 f-anvenirnext-m text-3xl md:text-5xl text-center mb-[60px]'><span className='text-black_800'>Publish</span> your ideas to our <span className='text-purple'>community</span></h1>

                <div className='grid grid-cols-1 md:grid-cols-2 lmd:grid-cols-3 gap-5'>

                    {/* Box 01  */}
                    <div className='bg-pink rounded-[20px] p-3 sm:p-5'>
                        <div className='w-full h-80 md:h-[380px] rounded-[15px] overflow-hidden'>
                            <img src={Community1} alt="Community" className='w-full h-full bg-center' />
                        </div>

                        <p className='text-blue f-dmmono-m text-center text-base mt-5 mb-6 px-3'>What if video cameras had the power to rewind moments? Which memory would you like to relive?</p>

                        <div className='flex justify-between items-center gap-3 flex-wrap'>
                            <div className='flex items-center gap-2'>
                                <img src={Avatars1} alt="Name" className='w-10 h-10 rounded-full' />
                                <h4 className='text-black_800 f-anvenirnext-m text-xl flex-1'>Amie</h4>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineFavoriteBorder className='text-black_800' size={20} />
                                    <span className='text-black_800 f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <MdOutlineModeComment className='text-black_800' size={20} />
                                    <span className='text-black_800 f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <MdOutlineArrowOutward className='text-black_800' size={20} />
                                    <span className='text-black_800 f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='sm:ml-7 cursor-pointer'>
                                    <FaRegBookmark className='text-black_800' size={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 02  */}
                    <div className='bg-blue rounded-[20px] p-3 sm:p-5'>
                        <div className='w-full  h-80 md:h-[380px] rounded-[15px] overflow-hidden'>
                            <img src={Community2} alt="Community" className='w-full h-full bg-center' />
                        </div>

                        <p className='text-white f-dmmono-m text-center text-base mt-5 mb-6 px-3'>Imagine a clock that is the embodiment of kindness. How would it alter the concept of time.</p>

                        <div className='flex justify-between items-center gap-3 flex-wrap'>
                            <div className='flex items-center gap-2'>
                                <img src={Avatars2} alt="Name" className='w-10 h-10 rounded-full' />
                                <h4 className='text-white f-anvenirnext-m text-xl flex-1'>Amie</h4>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineFavoriteBorder className='text-white' size={20} />
                                    <span className='text-white f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <MdOutlineModeComment className='text-white' size={20} />
                                    <span className='text-white f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <MdOutlineArrowOutward className='text-white' size={20} />
                                    <span className='text-white f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='sm:ml-7 cursor-pointer'>
                                    <FaRegBookmark className='text-white' size={20} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Box 03  */}
                    <div className='bg-[#F2FFD0] rounded-[20px] p-3 sm:p-5'>
                        <div className='w-full h-80 md:h-[380px] rounded-[15px] overflow-hidden'>
                            <img src={Community3} alt="Community" className='w-full h-full bg-center' />
                        </div>

                        <p className='text-blue f-dmmono-m text-center text-base mt-5 mb-6 px-3'>Imagine a clock that is the embodiment of kindness. How would it alter the concept of time.</p>

                        <div className='flex justify-between items-center gap-3 flex-wrap'>
                            <div className='flex items-center gap-2'>
                                <img src={Avatars1} alt="Name" className='w-10 h-10 rounded-full' />
                                <h4 className='text-black_800 f-anvenirnext-m text-xl flex-1'>Amie</h4>
                            </div>

                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <MdOutlineFavoriteBorder className='text-black_800' size={20} />
                                    <span className='text-black_800 f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <MdOutlineModeComment className='text-black_800' size={20} />
                                    <span className='text-black_800 f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='flex items-center gap-1'>
                                    <MdOutlineArrowOutward className='text-black_800' size={20} />
                                    <span className='text-black_800 f-anvenirnext-m text-base'>5</span>
                                </div>

                                <div className='sm:ml-7 cursor-pointer'>
                                    <FaRegBookmark className='text-black_800' size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='text-gray_900 f-anvenirnext-m text-3xl md:text-5xl text-center mb-[60px] mt-[100px]'><span className='text-black_800'>Post</span> and <span className='text-black_800'>customize</span> your <span className='text-purple'>profile</span></h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <img src={Image2} alt="Image" />
                    <img src={Image1} alt="Image" />
                </div>
            </div>
        </section>
    )
}

export default Community