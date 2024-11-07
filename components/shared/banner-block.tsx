import phone from '../../src/purplephone.png'
import Image from 'next/image'

export const BannerBlock:React.FC = () => {
    return (
        <div className="flex items-center bg-black px-[120px] gap-[88px]">
            <Image src={phone} alt="phone"/>
            <div className="flex flex-col gap-4">
                <h1 className="text-[56px] font-semibold">iPhone 14 Pro Max</h1>
                <p className="text-[24px] ">по лучшей цене в Москве</p>
                <div
                    className="flex items-center mt-5 justify-center rounded-[15px] py-5 text-white text-[16px] w-[160px] bg-[#0071E4]">подробнее
                </div>
            </div>
        </div>
    )
}