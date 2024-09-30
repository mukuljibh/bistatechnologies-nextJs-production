import TopNavHeader from "../top-nav-header/TopNavHeader";
import CompanyLogo from "./company-logo/CompanyLogo";
import React from "react";
import ToggleProvider from "./context/ToggleProvider";
import NavBox from "./nav-elements/NavBox";
export default function MainNavHeader() {

    return (
        < >
            <TopNavHeader />
            {/*Nav bar*/}
            <header className={`sticky -top-1 z-50 drop-shadow-md`}>

                <nav className='flex items-center  bg-white justify-around text-gray-600'>

                    <ToggleProvider>
                        <CompanyLogo />
                        <NavBox />
                    </ToggleProvider>
                    <div>
                        <button className='lg:flex items-center text-lg w-36 h-12 border-2 border-sky-700 rounded-lg  text-sky-700 hover:text-white hover:bg-sky-700 hidden   transition-all '>
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={28} viewBox="0 0 24 24" fill="#0369a1" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram hover:fill-white">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                            </svg>
                            <p>Apply Here</p>
                        </button>
                    </div>
                </nav >
            </header>
        </>)
}

