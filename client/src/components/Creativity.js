import React from 'react'
import CreativityImage from "../assets/creativity.png"

const Creativity = () => {
    return (
        <section className='flex flex-col items-center w-full px-4'>
            <div className='flex flex-col gap-6 items-center justify-center'>
                <h1 className='text-purple f-anvenirnext-m text-3xl md:text-5xl font-medium text-center'>Where Creativity Roams Free</h1>
                <p className='text-deep_gray f-anvenirnext-m text-xl md:text-2xl font-medium text-center max-w-[560px] mx-auto w-full'>Stimulate your creativity, connect with a community of creators, and sustain productivity.</p>
            </div>
            <div className='w-full'>
                <img src={CreativityImage} alt="Where Creativity Roams Free" className='w-full h-full' loading='lazy' />
            </div>
        </section>
    )
}

export default Creativity