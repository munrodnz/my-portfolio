import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header className='bg-green-600'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <NavLink to='/' 
                    exact
                    activeClassName='text-white'
                    className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl cursive font-bold tracking-widest'>Dazza</NavLink>
                    <NavLink to='/about' 
                    className='inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800'
                    activeClassName='border-b-2'
                    >About Me</NavLink>
                    <NavLink to='/posts' 
                    className='inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800'
                    activeClassName='border-b-2'
                    >My Musings</NavLink>
                    <NavLink to='/project' 
                    className='inline-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800'
                    activeClassName='border-b-2'
                    >Projects</NavLink>
                </nav>
                <div className='inline-flex items-center'>
                    {/* TODO Add Social Icons */}
                    <a href='https://twitter.com/munrod10' target='_blank' rel='noopener noreferrer'>
                        <img 
                        src='/twitter.png'
                        alt='Twitter Icon'
                        className='hover:transform scale(0.5) translateY(-15px)'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/darryl-munro' target='_blank' rel='noopener noreferrer'>
                        <img 
                        src='/linkedin.png'
                        alt='LinkedIn Icon'
                        />
                    </a>
                    <a href='https://www.instagram.com/darrylmunronz/' target='_blank' rel='noopener noreferrer'>
                        <img 
                        src='/instagram.png'
                        alt='Instagram Icon'
                        />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar
