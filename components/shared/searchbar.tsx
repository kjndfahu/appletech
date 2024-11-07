import {CatalogPopup} from "@/components/shared/catalog-popup";
import {SearchField} from "@/components/shared/search-field";
import {LikesLinks} from "@/components/shared/likes-links";
import {Cartbtn} from "@/components/shared/cartbtn";

interface Props{
    className?:string;
}

export const SearchBar:React.FC<Props> = ({className})=>{
    return (
        <div className="flex flex-row justify-between items-center px-[120px] bg-white py-[22px]">
            <CatalogPopup/>
            <SearchField/>
            <Cartbtn/>
        </div>
    )
}