import {HeaderNetworks} from "@/components/shared/header-networks";

interface Props{
    className?: string;
}

export const FooterContacts:React.FC<Props> =({className}) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-black text-[40px] leading-[43px] font-semibold">+7 812 704 86 97</h2>
            <p className="text-[#706E6E] text-[14px]">Бесплатная консультация<br/> С 10:00 до 21:00, без выходных</p>
            <div className="flex flex-row text-[20px] text-[#0071E4] items-center gap-6">
                <h4>Заказать звонок</h4>
                <HeaderNetworks/>
            </div>
            <div className="flex flex-col gap-3 mt-5 text-black text-[18px]">
                <h4>Москва, ул Барклая 8</h4>
                <h4>Москва, ул Барклая 8</h4>
            </div>
        </div>
    )
}