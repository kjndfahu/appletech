import {Circle} from "@/components/shared/icons";

interface Props {
    className?: string
}

export const ThirdCreditBlock: React.FC<Props> = () => {
    const data = ["Возраст - от 18 до 69 лет", "Наличие постоянного источника дохода (работа, пенсия)", "Наличие паспорта гражданина РФ"]
    return (
        <div className="flex w-full mt-[50px] mb-[75px]">
            <div className="flex flex-col gap-8 text-[32px] font-semibold leading-[38px] text-[#0071E4] w-[50%]">
                <h2>Условия для получения кредита</h2>
                <div className="flex flex-col gap-5">
                    {data.map((item) => (
                        <div key={item}
                             className="flex items-center text-black font-medium text-[20px] leading-[24px] gap-3">
                            <Circle/>
                            <h3>{item}</h3>
                        </div>
                    ))}

                </div>
            </div>
            <div className="flex flex-col rounded-[5px] px-[20px] w-[50%] items-center justify-center gap-2 bg-[#F3F8FF] text-black">
                <h2 className="text-[34px] leading-[40px]">Не откладывайте покупки на потом</h2>
                <h4 className="text-[18px] leading-[21px] font-normal">Купить желаемую технику в кредит на самых
                    выгодных условиях</h4>
                <div className="flex items-center rounded-[12px] py-[18px] mt-4 justify-center w-[70%] text-white bg-[#0071E4]">
                    заполнить анкету
                </div>
            </div>

        </div>
    )
}