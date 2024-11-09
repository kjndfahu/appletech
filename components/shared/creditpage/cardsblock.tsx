import {Card} from "@/components/shared/creditpage/card";
import {EyeLogo, LikeLogo, ReturnLogo} from "@/components/shared/creditpage/iconscredit";

export default function CardsBlock() {
    return (
        <div className="flex flex-col gap-4">
            <Card logo={<LikeLogo/>} title="80% заявок одобряют" description="Максимально высокая вероятность одобрения"/>
            <Card logo={<ReturnLogo/>} title="10 минут на заполнение" description="1 анкета для всех банков сразу"/>
            <Card logo={<EyeLogo/>} title="Без скрытых платежей" description="плата за рассрочку заранее включена в стоимость товаров "/>
        </div>
    )
}