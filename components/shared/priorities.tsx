import {Delivery, Discount, Garanties, Museum, Wallet} from "@/components/shared/logos";

export const Priorities:React.FC = () => {
    return(
        <div className="flex flex-col items-center justify-center py-[40px] px-[120px] text-black font-semibold">
            <h2 className="text-[32px]">Наши преимущества</h2>

            <div className="flex flex-row mt-6 w-full justify-between">
                <div className="flex items-center w-[228px] flex-col rounded-[16px] justify-between h-[500px] py-6 px-2 bg-[linear-gradient(180.04deg,_#FE94A6_0.04%,_#F2F2F2_65.84%)]">
                    <div className="flex items-center flex-col">
                        <Discount/>
                        <h2 className="text-[24px] font-semibold">Акции и подарки</h2>
                        <p className="text-center text-[16px] leading-4 text-[#585656] font-normal">Постоянные акции,
                            бонусы и <br/> скидки. Покупайте технику <br/> Apple по самым выгодным <br/> ценам</p>
                    </div>
                    <div
                        className="flex items-center justify-center w-full py-4 border-[1px] rounded-[15px] text-[#0071E4] border-[#0071E4]">
                        подробнее
                    </div>
                </div>

                <div className="flex items-center w-[228px] flex-col rounded-[16px] justify-between h-[500px] py-6 px-2 bg-[linear-gradient(180.04deg,_#E685FF_0.04%,_#F2F2F2_65.84%)]">
                    <div className="flex items-center gap-2 flex-col">
                        <Delivery/>
                        <h2 className="text-[24px] text-center leading-[24px] font-semibold">Доставим<br/>за 3 часа</h2>
                        <p className="text-center text-[16px] leading-4 text-[#585656] font-normal">Быстрая и бесплатная<br/> доставка
                            по Москве.<br/> Доставим за 3 часа в день<br/> заказа. Также доступна<br/> быстрая доставка
                            по всей<br/>России или самовывоз</p>
                    </div>
                    <div
                        className="flex items-center justify-center w-full py-4 border-[1px] rounded-[15px] text-[#0071E4] border-[#0071E4]">
                        подробнее
                    </div>
                </div>

                <div className="flex items-center w-[228px] flex-col rounded-[16px] justify-between h-[500px] py-6 px-2 bg-[linear-gradient(180.04deg,_#7DE9FF_0.04%,_#F2F2F2_65.84%)]">
                    <div className="flex gap-2 items-center flex-col">
                        <Wallet/>
                        <h2 className="text-[24px] leading-[24px] text-center font-semibold">Удобные способы<br/> оплаты</h2>
                        <p className="text-center text-[16px] leading-4 text-[#585656] font-normal">Наличными или картой при<br/> получении, оплата на сайте<br/> или в кредит</p>
                    </div>
                    <div
                        className="flex items-center justify-center w-full py-4 border-[1px] rounded-[15px] text-[#0071E4] border-[#0071E4]">
                        подробнее
                    </div>
                </div>

                <div className="flex items-center w-[228px] flex-col rounded-[16px] justify-between h-[500px] py-6 px-2 bg-[linear-gradient(180.04deg,_#FFE685_0.04%,_#F7F7F7_65.84%)]">
                    <div className="flex items-center gap-2 flex-col">
                        <Museum/>
                        <h2 className="text-[24px] font-semibold">Покупка в кредит</h2>
                        <p className="text-center text-[16px] leading-4 text-[#585656] font-normal">Получите самое выгодное<br/> кредитное предложение от<br/> более чем 30 ведущих<br/> банков страны</p>
                    </div>
                    <div
                        className="flex items-center justify-center w-full py-4 border-[1px] rounded-[15px] text-[#0071E4] border-[#0071E4]">
                        подробнее
                    </div>
                </div>

                <div className="flex items-center w-[228px] flex-col rounded-[16px] justify-between h-[500px] py-6 px-2 bg-[linear-gradient(180.04deg,_#ADFFC1_0.04%,_#F2F2F2_65.84%)]">
                    <div className="flex items-center flex-col gap-2">
                        <Garanties/>
                        <h2 className="text-[24px] font-semibold">Гарантия</h2>
                        <p className="text-center text-[16px] leading-4 text-[#585656] font-normal">Все товары, представленные<br/> в нашем сайте, имеют<br/> гарантию<br/>
                            от нашего магазина или<br/> компании Apple</p>
                    </div>
                    <div
                        className="flex items-center justify-center w-full py-4 border-[1px] rounded-[15px] text-[#0071E4] border-[#0071E4]">
                        подробнее
                    </div>
                </div>

            </div>


        </div>
    )
}