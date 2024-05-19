import React from 'react'

const About = () => {
    return (
        <section className='mt-52 mb-40 md:mb-64 px-4'>
            <div className='max-w-[1300px] mx-auto w-full'>
                <h1 className='f-dmmono-m text-center font-medium text-dark_gray text-2xl md:text-[32px] md:leading-[40px] mb-[60px]'>About Roamly</h1>
                <p className='f-anvenirnext-m text-center font-medium text-dark_gray text-3xl md:text-[48px] md:leading-[60px]'>
                    <span className='text-black_800'>Roamly</span> is a game that stimulates your <span className='text-black_800'>creativity</span> through <span className='text-black_800'>lateral thinking</span> with <span className='text-purple'>AI-generated prompts</span>, connects you with a <span className='text-purple'>community</span><span className='text-black_800'>,</span> and sustains <span className='text-purple'>productivity</span> through <span className='text-black_800'>play</span>.
                </p>
            </div>
        </section>
    )
}

export default About