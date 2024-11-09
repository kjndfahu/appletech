import Link from "next/link";
import {ChevronRight} from "lucide-react";
import {CreditBlock} from "@/components/shared/credit-block";
import CardsBlock from "@/components/shared/creditpage/cardsblock";
import Cta from "@/components/shared/creditpage/cta";
import {CreditSteps} from "@/components/shared/creditpage/creditsteps";
import {ThirdCreditBlock} from "@/components/shared/creditpage/thirdcreditblock";


export default function CreditPage() {
    return (
        <div className="bg-white">
            <div className="flex flex-row gap-2 px-[120px] text-[16px] text-[#585656] my-4">
                <Link href="/">
                    <h2>Главная</h2>
                </Link>
                <ChevronRight color="#B7B7B7"/>
                <h2 className="text-black">Кредит</h2>
            </div>
            <div className="flex flex-col gap-14 px-[120px]">
                <CreditBlock/>
                <div className="flex flex-row gap-10">
                    <CardsBlock/>
                    <Cta/>
                </div>
                <CreditSteps/>
                <ThirdCreditBlock/>
            </div>
        </div>
    )
}