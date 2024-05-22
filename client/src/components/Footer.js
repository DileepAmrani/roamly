import React from 'react'
import Instagram from "../assets/insta-white-logo.svg"
import XLogo from "../assets/x-logo.svg"
import Mail from "../assets/mail.svg"
import InstaIcon from "../assets/footer-insta.svg"

const Footer = () => {
    return (
        // <section className='bg-purple px-4 w-full pt-[80px] pb-[113px]'>
        //     <div className='w-full max-w-[1300px] mx-auto flex flex-col lmd:flex-row justify-between gap-14 lmd:gap-5'>
        //         <div className='flex flex-col items-center md:items-start gap-7'>
        //             <h1 className='w-full lmd:max-w-[328px] mx-auto md:mx-0 text-center md:text-start text-light_gray f-anvenirnext-m text-5xl'>Roam around on Roamly</h1>
        //             <div className='flex items-center gap-6'>
        //                 <a href="#"><img src={Instagram} alt="Instagram" className='cursor-pointer' /></a>
        //                 <a href="#"><img src={XLogo} alt="XLogo" className='cursor-pointer' /></a>
        //             </div>
        //         </div>

        //         <div className='flex flex-col md:flex-row md:max-w-[600px] w-full justify-between items-center md:items-start gap-10 md:gap-4 flex-wrap'>
        //             <ul className='flex flex-col items-center md:items-start gap-[22px]'>
        //                 <li className='f-anvenirnext-m text-light_gray text-[28px] mb-1'>Product</li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Game</a></li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Features</a></li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Benefits</a></li>
        //             </ul>

        //             <ul className='flex flex-col items-center md:items-start gap-[22px]'>
        //                 <li className='f-anvenirnext-m text-light_gray text-[28px]'>Explore</li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Community</a></li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Case Studies</a></li>
        //             </ul>

        //             <ul className='flex flex-col items-center md:items-start gap-[22px]'>
        //                 <li className='f-anvenirnext-m text-light_gray text-[28px]'>Resources</li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Our Story</a></li>
        //                 <li><a href="#" className='f-anvenirnext-m text-light_gray text-lg'>Blog</a></li>
        //             </ul>
        //         </div>
        //     </div>
        // </section>

        <section className='py-14 px-4 flex items-center'>
            <div className='flex items-center justify-center w-full gap-8 sm:gap-[60px] flex-col-reverse sm:flex-row'>
                <span className='text-[#292929] f-anvenirnext-m text-xl'>© 2024</span>
                <div className='flex items-center gap-5'>
                    <img src={Mail} alt="mail" />
                    <a href='mailto:roamly.io@gmail.com' className='text-deep_gray f-anvenirnext-m text-xl'>roamly.io@gmail.com</a>
                </div>

                <div className='flex items-center gap-5'>
                    <img src={InstaIcon} alt="mail" />
                    <a href='https://www.instagram.com/roamly.io/' target='_blank' className='text-deep_gray f-anvenirnext-m text-xl'>roamly.io</a>
                </div>
            </div>
        </section>
    )
}

export default Footer