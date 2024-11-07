import {Card} from "@/components/shared/card";

interface Props{
    className?:string;
}

export const NewItems:React.FC<Props> =({className}) => {
    return (
        <div className="px-[120px]">
            <h2 className="text-[#0071E4] font-medium text-[24px] mb-6">Новинки</h2>

            <div className="flex gap-6 justify-between flex-row flex-wrap items-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}