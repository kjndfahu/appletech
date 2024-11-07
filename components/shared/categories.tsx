import iphone from '../../src/iphone14.png'
import Image from 'next/image'
import {ArrowRight} from "lucide-react";

interface Props{
    className?:string;
}

export const Categories:React.FC<Props> = ({className}) => {
    const data = [
        {
            id: 1,
            title: 'iPhone',
            img: ''
        },
        {
            id: 2,
            title: 'iPad',
            img: ''
        },
        {
            id: 3,
            title: 'Macbook и iMac',
            img: ''
        },
        {
            id: 4,
            title: 'Watch',
            img: ''
        },
        {
            id: 5,
            title: 'Аксессуары',
            img: ''
        },
    ]

    return (
        <div className="flex flex-row items-center justify-between text-black text-[20px] font-medium gap-4 bg-white py-3 px-[120px]">
            {data.map((item) => (
                <div key={item.id}>{item.title}</div>
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