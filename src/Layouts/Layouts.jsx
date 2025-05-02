import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftAside from './../Components/HomeLayout/LeftAside';
import RightsAside from '../Components/HomeLayout/RightsAside';

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
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside/>
                </aside>

                <section className='main col-span-7'>
                    <Outlet/>
                </section>

                <aside className='col-span-2 sticky top-0 h-fit'>
                    <RightsAside/>
                </aside>
            </main>
        </div>
    );
};

export default Layouts;