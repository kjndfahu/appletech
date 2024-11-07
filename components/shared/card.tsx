import iphone from '../../src/cardiphone.png'
import Image from 'next/image'
import {ShoppingCart} from "lucide-react";

interface Props{
    className?:string;
}

export const Card:React.FC<Props> =({className}) => {
    return (
        <div className="flex rounded-[16px] flex-col bg-white [box-shadow:0px_4px_8px_0px_rgba(0,_0,_0,_0.05)] py-4">
            <h2 className="text-black w-[250px] text-center leading-7 font-medium text-[24px]">Apple iPhone XS Max 256 ГБ золотой</h2>
            <Image className="pt-[9px]" src={iphone} alt="iphone"/>
            <div className="flex px-4 text-[#706e6e] text-[15px] pt-4 items-center justify-between flex-row">
                <div className="flex flex-row items-center gap-1 ">
                    <div className="w-[16px] h-[16px] bg-[#6fd91c] rounded-full"></div>
                    <p>Есть в наличии</p>
                </div>
                <h2>Гарантия 1 год</h2>
            </div>
            <h2 className="text-black text-[32px] pl-4">137 900 ₽</h2>
            <div className="flex flex-row items-center justify-center gap-1 mx-4 rounded-[10px] py-4 bg-[#0071E4]">
                <ShoppingCart color="#ffffff"/>
                в корзину
            </div>
        </div>
    )
}