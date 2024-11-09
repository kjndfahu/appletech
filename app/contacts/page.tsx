import Link from "next/link";
import {ChevronRight} from "lucide-react";
import {SocNetworks} from "@/components/shared/socnetworks";
import {AddressesBlock} from "@/components/shared/addressesblock";

export default function ContactsPage(){
    return (
        <div className="bg-white px-[120px]">
            <div className="flex flex-row gap-2 text-[16px] text-[#585656] my-4">
                <Link href="/">
                    <h2>Главная</h2>
                </Link>
                <ChevronRight color="#B7B7B7"/>
                <h2 className="text-black">Контакты</h2>
            </div>
            <div className="flex flex-row mt-10 text-black">
                <div className="flex flex-col gap-6">
                    <h2 className="font-semibold text-[40px] leading-[47px]">Контакты</h2>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[24px] font-semibold leading-[28px]">Можно позвонить</h3>
                        <h2 className="text-[32px] leading-[38px] font-semibold text-[#0071E4]">+7 (812) 704-86-97</h2>
                        <p className="text-[16px] leading-[19px] text-[#585656]">на связи с 10:00 до 22:00</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-[8px]">
                        <h3 className="text-[24px] font-semibold leading-[28px]">Можем позвонить мы</h3>
                        <h2 className="text-[24px] leading-[28px] font-semibold underline text-[#0071E4]">заказать
                            звонок</h2>
                    </div>
                    <div className="flex flex-col gap-2 mt-[8px]">
                        <h3 className="text-[24px] font-semibold leading-[28px]">Можно написать</h3>
                        <SocNetworks/>
                    </div>
                </div>
                <AddressesBlock/>
            </div>
        </div>
    )
}