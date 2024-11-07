import phone from '../../src/phonewithletters.png'
import Image from 'next/image'

interface Props{
    className?:string;
}

export const SubscribeBlock:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-row items-center gap-[88px] bg-[#F9F9F9] py-[55px] px-[120px]">
            <Image src={phone} alt="phone"/>

            <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-2 text-black">
                    <h2 className="text-[48px] leading-[48px] font-semibold">Подписка на <br/> рассылку акций!</h2>
                    <p className="text-[#585656] text-[24px] leading-[24px] font-medium">Подпишитесь на рассылку, чтобы <br/> узнавать о всех акциях первым</p>
                </div>
                <div className="flex flex-col gap-4 bg-[linear-gradient(90.34deg,_#F7355D_0.3%,_#9747FF_101.33%)] rounded-[20px] px-10 py-4 text-white">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-[40px] leading-[40px] font-semibold">Скидка 10%</h2>
                        <p className="text-[20px]">на первую покупку за подписку</p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <input
                            className=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-6 py-3 text-[24px] rounded-[16px] text-black"
                            placeholder="+7"
                            type="number"/>
                        <div className="flex items-center text-[#585656] px-[33px] justify-center bg-[#F9F9F9] rounded-[8px]">
                            подписаться
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}