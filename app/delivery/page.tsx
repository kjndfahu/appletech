import Link from "next/link";
import {ChevronRight} from "lucide-react";

export default function DeliveryPage() {
    return (
        <div className="bg-white px-[120px]">
            <div className="flex flex-row gap-2 text-[16px] text-[#585656] my-4">
                <Link href="/">
                    <h2>Главная</h2>
                </Link>
                <ChevronRight color="#B7B7B7"/>
                <h2 className="text-black">Доставка</h2>
            </div>
        </div>
    )
}