import React from 'react'
import image from '../View-to-Glenorchy.jpg'

const Home = () => {
    return (
        <main>
            <img src={image} alt='View to Paradise' className='absolute object-cover w-full h-full'/>
            <div className='absolute object-cover bg-black opacity-40 w-full h-full'></div>
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <h1 className='text-3xl sm:text-6xl text-white font-bold cursive leading-none lg:leading-snug p-8'>Welcome, my name is Darryl....</h1>
            </section>
        </main>
    )
}

export default Home
