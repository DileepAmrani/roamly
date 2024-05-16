import React from 'react'
import Logo from "../assets/logo.svg"
import Instagram from "../assets/instagram.svg"

const Navbar = () => {
    return (
        <section className="w-full max-w-[1300px] mx-auto h-20 md:h-28 flex items-center px-4">
            <main className='flex items-center justify-between gap-3 w-full'>
                <img src={Logo} alt="Roamly Logo" />
                <a href="https://www.instagram.com/roamly.io/" target='_blank'>
                    <img src={Instagram} alt="Instagram Logo" />
                </a>
            </main>
        </section>
    )
}

export default Navbar