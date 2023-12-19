import React from "react";

import { useState } from 'react';

import {WebsiteTitle} from "./WebsiteTitle";
import { NavigationButton } from "./NavigationButton";
import burgurMenu from "../../assets/burgerMenu.svg"

export const NavigationBar : React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [activePage, setActivePage] = useState("About");

    return (
        <div className="w-full flex content-center justify-between px-4 pt-2 pb-1 fixed top-0 animate-fadeIn bg-dark bg-opacity-90">
            <WebsiteTitle/>
            <div className="sm:hidden">
                <img src={burgurMenu} alt="" className="w-[28px] h-full self-center" onClick={()=>setIsMenuVisible(!isMenuVisible)}/>
                {isMenuVisible && <div className="absolute top-12 right-2 grid justify-items-end" >
                    <NavigationButton buttonText={routeNames.ABOUT} path="/" isActive={activePage==`${routeNames.ABOUT}`} activePageHandler={setActivePage}/>
                    <NavigationButton buttonText={routeNames.PROJECTS} path="/projects" isActive={activePage==`${routeNames.PROJECTS}`} activePageHandler={setActivePage}/>
                    <NavigationButton buttonText={routeNames.RESUME} path="/resume" isActive={activePage==`${routeNames.RESUME}`} activePageHandler={setActivePage}/>
                </div>}
            </div>
            <div className="hidden sm:flex opacity-20 hover:opacity-100 duration-700">
                <NavigationButton buttonText={routeNames.ABOUT} path="/" isActive={activePage==`${routeNames.ABOUT}`} activePageHandler={setActivePage}/>
                <NavigationButton buttonText={routeNames.PROJECTS} path="/projects" isActive={activePage==`${routeNames.PROJECTS}`} activePageHandler={setActivePage}/>
                <NavigationButton buttonText={routeNames.RESUME} path="/resume" isActive={activePage==`${routeNames.RESUME}`} activePageHandler={setActivePage}/>
            </div>
        </div>
    )
}

const routeNames = {
    ABOUT: "About",
    PROJECTS: "Projects",
    RESUME: "Resume"
}