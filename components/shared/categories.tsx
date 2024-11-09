import iphone from '../../src/iphone14.png'
import Image from 'next/image'
import {ArrowRight} from "lucide-react";
import {AccesoriesLogo, IpadLogo, IphoneLogo, MacLogo, WatchLogo} from "@/components/shared/icons";

interface Props{
    className?:string;
}

export const Categories:React.FC<Props> = ({className}) => {
    const data = [
        {
            id: 1,
            title: 'iPhone',
            img: <IphoneLogo/>
        },
        {
            id: 2,
            title: 'iPad',
            img: <IpadLogo/>
        },
        {
            id: 3,
            title: 'Macbook и iMac',
            img: <MacLogo/>
        },
        {
            id: 4,
            title: 'Watch',
            img: <WatchLogo/>
        },
        {
            id: 5,
            title: 'Аксессуары',
            img: <AccesoriesLogo/>
        },
    ]

    return (
        <div className="flex flex-row items-center justify-between text-black text-[20px] font-medium gap-4 bg-white py-3 px-[120px]">
            {data.map((item) => (
                <div className="flex gap-2 items-center flex-row" key={item.id}>
                    {item.img}
                    {item.title}
                </div>
            ))}
            <div className="flex flex-row rounded-[8px] items-center gap-3 bg-[linear-gradient(90deg,_#000000_22.19%,_#5E556B_100%)] text-white text-[20px] px-2">
                <Image src={iphone} alt="iphone"/>
                iPhone 14 Pro Max
                <div className="border-[2px] rounded-full border-[#B7B7B7]">
                    <ArrowRight color="#B7B7B7"/>
                </div>
            </div>
        </div>
    )
}