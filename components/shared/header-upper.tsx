import React from 'react'
import {HeaderNetworks} from "@/components/shared/header-networks";

interface Props{
    className?:string;
}


export const HeaderUpper:React.FC<Props> =({className}) => {
    return (
        <div className="bg-[#F9F9F9] flex flex-row justify-between items-center text-[19px] leading-[19px]">
            <div className="mx-[120px] my-4 w-[100vw]">
                <h2 className="text-black">Ваш город: <span className=" font-normal text-blue-700">Москва</span></h2>
            </div>
            <HeaderNetworks/>
        </div>
    )
}