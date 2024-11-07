import {EllipsisVertical} from "lucide-react";

interface Props{
    className?: string;
}

export const CatalogPopup:React.FC<Props> =({className}) => {
    return (
        <div className="flex">
            <div className="flex items-center text-[20px] p-4 rounded-[21px] bg-[#0071E4]">
                <EllipsisVertical />
                    Каталог товаров
            </div>
        </div>
    )
}