import {ChevronRight} from "lucide-react";
import {Warranty} from "@/components/shared/warranty";
import Link from "next/link";

export default function WarrantyPage() {
    return (
        <div className="bg-white px-[120px]">
            <div className="flex flex-row gap-2 text-[16px] text-[#585656] my-4">
                <Link href="/">
                    <h2>Главная</h2>
                </Link>
                <ChevronRight color="#B7B7B7"/>
                <h2 className="text-black">Гарантия</h2>
            </div>
            <Warranty/>
        </div>
    )
}