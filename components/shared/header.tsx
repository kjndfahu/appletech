import React from 'react'
import {HeaderUpper} from "@/components/shared/header-upper";
import {HeaderNavigation} from "@/components/shared/header-navigation";
import {SearchBar} from "@/components/shared/searchbar";

interface Props{
    className?:string;
}

export const Header:React.FC<Props> =({className}) => {
    return (
        <div>
            <div className="flex flex-col justify-between">
                <HeaderUpper/>
                <HeaderNavigation/>
                <SearchBar/>
            </div>
        </div>
    )
}