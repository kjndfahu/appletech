import {ShoppingBag} from "lucide-react";

interface Props{
    className?:string;
}

export const Cartbtn:React.FC<Props> = ({className}) => {
    return (
        <div className="flex cursor-pointer flex-row items-center gap-1 text-[20px] bg-[#52D116] px-[31px] py-4 rounded-[16px]">
            <ShoppingBag />
            в корзине
            <div className="flex gap-1 w-[30px] h-[30px] items-center justify-center rounded-full text-white text-[20px] [box-shadow:0px_4px_4px_0px_rgba(0,_0,_0,_0.25)_inset]">
                0
            </div>
        </div>
    )
}