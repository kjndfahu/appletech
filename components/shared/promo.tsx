import img from '../../src/orig (66) 1.png'
import Image from 'next/image'

interface Props{
    className?:string;
}

export const Promo:React.FC<Props> = ({className}) => {
    return (
        <div className="flex items-center text-[#1E3240] gap-12 justify-center pt-[100px] bg-[#D0EAFC]">
            <Image src={img} alt="iphone"/>
            <div>
                <h2 className="text-[88px] font-bold">iPhone 14</h2>
                <h2 className="text-[48px]">от 137 000 ₽</h2>
                <div className="flex items-center mt-5 justify-center rounded-[15px] py-5 text-white text-[16px] w-[160px] bg-[#0071E4]">подробнее</div>
            </div>
        </div>
    )
}

