"use client"

import '../css/navbar.css'
import Logo from './logo'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Navbar = (props) => {

    const navItems = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/exp',
            title: 'Experience'
        },
        {
            path: '/something',
            title: 'Something'
        },
    ]

    useEffect(() => {
        console.log(props.path)
    })

    return (
        <div id='navbarContainer' className='
            flex
            flex-row
            fixed
            top-0
            w-screen
            h-16
            z-1'>
            <Logo />
            <div className='
                    flex
                    flex-row
                    justify-end
                    items-center
                    w-full
                    h-full
                    right-0
                    pr-16
                '>
                {navItems.map((item) => {
                    return (
                        <Link href={item.path} className={item.path == props.path ? 'active' : ''}>
                            <span>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar