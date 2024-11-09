import {Like, Person} from "@/components/shared/creditpage/iconscredit";

export default function Cta(){
    return (
        <div className="flex justify-between flex-col text-[#100E0E] text-[32px] font-medium leading-[38px] rounded-[16px] py-[24px] px-[32px] w-full h-auto bg-[#F3F8FF]">
            <div className="flex flex-row gap-11">
                <Person/>
                <div className="flex flex-col gap-4 w-[50%]">
                    <h2>Заполните одну короткую анкету и получите ответ от более 10
                        банков-партнеров</h2>
                    <div className="flex items-center justify-center rounded-[10px] text-[16px] w-[288px] h-[56px] text-white bg-[#0071E4]">заполнить анкету</div>
                </div>
            </div>
            <div className="flex gap-2 items-center flex-row bg-white px-2 py-[5px] rounded-[16px] w-full">
                <Like/>
                <h3 className="w-[51%] text-[16px] leading-[19px]">Предварительно с вами свяжется сотрудник нашего магазина
                    и ответит на все ваши вопросы связанными с покупкой в кредит</h3>
            </div>
        </div>
    )
}