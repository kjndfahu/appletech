import {Search} from "lucide-react";

interface Props{
    className?:string;
}

export const SearchField:React.FC<Props> = ({className}) => {
    return (
        <div className="flex border-[1px] items-center px-6 py-4 border-[#B7B7B7] rounded-[20px] relative w-[800px] h-14">
            <Search color="#B7B7B7"/>
            <input className="outline-none w-full px-6 text-black"
                   type="text"
                   placeholder="Поиск по каталогу товаров..."/>
        </div>
    )
}