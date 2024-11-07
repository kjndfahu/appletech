import React from 'react'
import {Apple, Flame} from "@/components/shared/logos";
import {Navigation} from "@/components/shared/navigation";
import {ContactsBlock} from "@/components/shared/contactsblock";
import Link from "next/link";

interface Props{
    className?:string
}

export const HeaderNavigation:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-row bg-[#FFFFFF]">
            <div className="flex flex-row items-center justify-center mx-[120px] py-[33px] text-black gap-9">
                <Link href="/">
                    <Apple/>
                </Link>
                <div className="flex gap-7 text-[18px]">
                    <Link href="/">
                        <h4>Весь каталог</h4>
                    </Link>
                    <div className="flex items-center text-[18px] justify-center px-2 gap-1 rounded-[8px] bg-[#fdefbf]">
                        <Flame/>
                        Акции
                    </div>
                    <Navigation/>
                    <ContactsBlock/>
                </div>
            </div>

        </div>
    )
}