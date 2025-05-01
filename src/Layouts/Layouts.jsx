import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';

const Layouts = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews/>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar/>
            </nav>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet/>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default Layouts;