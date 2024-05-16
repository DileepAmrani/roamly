import React from 'react'
import Team1 from "../assets/team-1.jpg"
import Team2 from "../assets/team-2.jpg"

const Team = () => {
    return (
        <section className='mb-40 lmd:mb-[500px] px-4'>
            <h3 className='text-dark_gray f-dmmono-m text-[32px] text-center mb-[60px]'>Our Team</h3>
            <div className='w-full max-w-[828px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-[60px]'>
                <div className='w-full'>
                    <div className='flex items-center justify-center'>
                        <img src={Team1} alt="Min Supitcha Jutatungcharoen" className='w-full xsm:w-[337px] h-[337px] opacity-90 rounded-[20px]' />
                    </div>
                    <h4 className='text-center text-deep_gray f-anvenirnext-m text-[26px] leading-[35px] my-8'>Min Supitcha Jutatungcharoen</h4>
                    <h5 className='text-center text-deep_gray f-anvenirnext-m text-xl'>Product Designer (UX/UI)</h5>
                </div>
                <div>
                    <div className='flex items-center justify-center'>
                        <img src={Team2} alt="Sakib Sadman Rabbani" className='w-full xsm:w-[337px] h-[337px] opacity-90 rounded-[20px]' />
                    </div>
                    <h4 className='text-center text-deep_gray f-anvenirnext-m text-[26px] leading-[35px] my-8'>Sakib Sadman Rabbani</h4>
                    <h5 className='text-center text-deep_gray f-anvenirnext-m text-xl'>Software Developer</h5>
                </div>
            </div>
        </section>
    )
}

export default Team