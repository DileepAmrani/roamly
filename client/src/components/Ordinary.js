import React from 'react'
import Ordinary1 from "../assets/1.png"
import Ordinary2 from "../assets/2.png"
import Ordinary3 from "../assets/3.png"

const Ordinary = () => {
    return (
        <section className='w-full px-4 mb-44'>
            <div className='w-full max-w-[1300px] relative mx-auto lmd:h-[800px] flex justify-center items-center flex-col'>
                <h1 className='text-black_800 relative z-50 f-anvenirnext-m text-6xl md:text-[95px] leading-[70px] md:leading-[118.75px] w-full max-w-[612px] mx-auto text-center'>Roam Beyond the Ordinary</h1>

                <div className='lmd:absolute -top-40 bottom-auto left-12'>
                    <div className='bg-[#EADFFF] w-60 md:w-[320px] h-60 md:h-[320px] rounded-2xl p-4 mt-10'>
                        <img src={Ordinary1} alt="Ordinary1" loading='lazy' />
                    </div>
                </div>
                <div className='bg-[#E1FF22] w-60 md:w-[320px] h-60 md:h-[320px] rounded-2xl p-4 mt-10 lmd:absolute -top-56 right-20'>
                    <img src={Ordinary2} alt="Ordinary2" loading='lazy' />
                </div>
                <div className='flex justify-center lmd:justify-end w-full items-end'>
                    <div className='bg-[#4AD355] w-60 md:w-[320px] h-60 md:h-[320px] rounded-2xl p-4 lmd:mr-64 mt-10'>
                        <img src={Ordinary3} alt="Ordinary2" loading='lazy' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ordinary