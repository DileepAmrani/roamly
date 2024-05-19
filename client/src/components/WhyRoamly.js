import React from 'react'
import Blocks from "../assets/overcome-creative-blocks.png"
import Productivity from "../assets/boost-&-sustain-productivity.png"
import Emotions from "../assets/feel-good-emotions.png"

const WhyRoamly = () => {
    return (
        <section className='w-full px-4 mt-32 md:mt-64 mb-40 lmd:mb-[396px]'>
            <h3 className='f-dmmono-m text-dark_gray text-[32px] text-center mb-14'>Why Roamly?</h3>
            <div className='max-w-[1300px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-20'>
                <div className='flex flex-col items-center justify-start text-center gap-8'>
                    <img src={Blocks} alt="Overcome Creative Blocks" />
                    <h4 className='text-deep_gray f-anvenirnext-m text-[28px]'>Overcome Creative Blocks</h4>
                    
                    <p className='text-deep_gray f-anvenirnext-m text-xl'>
                        Lateral thinking encourages you to think differently and look from new angles, unlocking innovative solutions.
                    </p>
                </div>

                <div className='flex flex-col items-center justify-start text-center gap-8'>
                    <img src={Productivity} alt="Boost & Sustain Productivity" />
                    <h4 className='text-deep_gray f-anvenirnext-m text-[28px]'>Boost & Sustain Productivity</h4>
                    <p className='text-deep_gray f-anvenirnext-m text-xl'>Engaging in playful, creative activities can relieve stress and revive energy to keep your productivity going.</p>
                </div>

                <div className='flex flex-col items-center justify-start text-center gap-8'>
                    <img src={Emotions} alt="Feel-good emotions" />
                    <h4 className='text-deep_gray f-anvenirnext-m text-[28px]'>Feel-good emotions</h4>
                    <p className='text-deep_gray f-anvenirnext-m text-xl'>The act of creating and connecting with others can promote positive emotions to keep you energized.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyRoamly