import React from "react";
import {WebsiteTitle} from "./WebsiteTitle";
import { NavigationButton } from "./NavigationButton";

export const NavigationBar : React.FC = () => {
    return (
        <div className="w-full flex content-center justify-between px-2 py-1 border-b-green border-opacity-50 border-b-2">
            <WebsiteTitle/>
            <div className="flex">
                <NavigationButton buttonText="About"/>
                <NavigationButton buttonText="Projects"/>
                <NavigationButton buttonText="Resume"/>
            </div>
        </div>
    )
}