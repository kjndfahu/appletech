import {CreditLogo} from "@/components/shared/logos";


interface Props{
    className?:string;
}

export const CreditBlock:React.FC<Props> = ({className}) => {
    return (
        <div className="flex flex-col px-[120px]">
            <div className="flex flex-col gap-14 w-full">
                <div className="flex text-white pt-5 px-24 w-full gap-20 text-[40px] font-bold rounded-[16px] bg-[linear-gradient(269.84deg,_#0071E4_0.08%,_#7EBEFF_99.92%)]">
                    <CreditLogo/>
                    <div className="flex justify-center flex-col gap-2">
                        <h4>
                            От 10 000 до 600 000₽
                        </h4>
                        <h4 className="text-[24px] font-medium">
                            в кредит, за 30 минут без похода в банк
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}