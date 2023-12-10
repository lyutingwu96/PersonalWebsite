import React from "react";
import {WebsiteTitle} from "./WebsiteTitle";
import { NavigationButton } from "./NavigationButton";

export const NavigationBar : React.FC = () => {
    return (
        <div className="w-full flex content-center justify-between px-4 py-2">
            <WebsiteTitle/>
            <div className="flex opacity-10 hover:opacity-100 duration-700">
                <NavigationButton buttonText="About"/>
                <NavigationButton buttonText="Projects"/>
                <NavigationButton buttonText="Resume"/>
            </div>
        </div>
    )
}